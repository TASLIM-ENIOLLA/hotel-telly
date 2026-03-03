import { IBM_Plex_Sans, Old_Standard_TT } from "next/font/google";

export const IBMPlexSans = IBM_Plex_Sans({
  style: "normal",
  display: "auto",
  variable: "--font-primary",
});

export const OldStandardTT = Old_Standard_TT({
  weight: ["400", "700"],
  style: "normal",
  display: "swap",
  variable: "--font-secondary",
});