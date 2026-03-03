import "@/css/globals.css";
 
import { QueryProvider } from "@/lib/query";
import { cn } from "@/components/shadcn/lib/utils";

import { Toaster } from "@/components/shadcn/ui/sonner";

import { IBMPlexSans } from "./fonts";
import { OldStandardTT } from "./fonts";

export default function Layout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryProvider>
      <html lang="en" className={cn(
        IBMPlexSans.variable,
        OldStandardTT.variable,
      )}>
        <body className="bg-muted-foreground/5">
          <Toaster position="bottom-right" />
          {children}
        </body>
      </html>
    </QueryProvider>
  );
}