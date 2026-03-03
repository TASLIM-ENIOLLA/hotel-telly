import { toast } from "sonner";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const TOKEN_NAME = process.env.TOKEN_NAME as string;
const TOKEN_MAX_AGE = process.env.TOKEN_MAX_AGE as string;

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      expiresAt: null,

      setUser: (user) => {
        set({ user });
      },

      setToken: (token) => {
        if (typeof window !== "undefined") {
          if (token) {
            if ("cookieStore" in window) {
              (window.cookieStore as any).set({
                maxAge: Number(TOKEN_MAX_AGE),
                name: TOKEN_NAME,
                value: token,
                secure: true,
                path: "/",
              });
            }
            else {
              document.cookie = `${TOKEN_NAME}=${token}; path=/; max-age=${TOKEN_MAX_AGE}; SameSite=Lax; Secure`;
            }
          }

          else {
            if ("cookieStore" in window) {
              (window.cookieStore as any).delete(TOKEN_NAME);
            }
            else {
              document.cookie = `${TOKEN_NAME}=; path=/; max-age=0; SameSite=Lax`;
            }
          }
        }

        set({ token });
      },

      login: ({ user, token, ttlMs = Number(TOKEN_MAX_AGE) }) => {
        get().setToken(token);

        set({
          user,
          expiresAt: Date.now() + ttlMs,
        });
      },

      logout: () => {
        get().setToken(null);

        set({
          user: null,
          expiresAt: null,
        });
      },

      isAuthenticated: () => {
        const { token, expiresAt } = get();

        return Boolean(token && expiresAt && Date.now() < expiresAt);
      },

      isExpired: () => {
        const { expiresAt } = get();

        if (!expiresAt) {
          return true;
        };

        return Date.now() > expiresAt;
      },
    }),
    {
      name: "payeasy-auth-store",
      onRehydrateStorage: function(state) {
        if (!state) return;

        if (state.expiresAt && (Date.now() > state.expiresAt)) {
          state.setToken(null);
          state.user = null;

          toast.message("Authentication required, redirecting to login...");
        }
      },
    }
  )
);

export type Token = string;

export type User = {
  id: number;
  role: string;
  email: string;
  status: string;
  name?: string;
  businessName?: string;
};

export type LoginProps = {
  user: User;
  token: Token;
  ttlMs?: number;
}

export interface AuthStore {
  user: User | null;
  token: Token | null;
  expiresAt: number | null;

  isExpired: () => boolean;
  isAuthenticated: () => boolean;

  logout: () => void;
  login: (loginProps: LoginProps) => void;

  setUser: (user: User | null) => void;
  setToken: (token: Token | null) => void;
}