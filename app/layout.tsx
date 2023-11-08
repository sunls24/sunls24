import type { Metadata, Viewport } from "next";
import "./globals.css";
import React from "react";
import { Roboto_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "sunls24",
  appleWebApp: {
    title: "sunls24",
  },
};

export const viewport: Viewport = {
  viewportFit: "cover",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFF" },
    { media: "(prefers-color-scheme: dark)", color: "#09090B" },
  ],
};

const font = Roboto_Mono({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh" className={font.className} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.VERCEL && <Analytics />}
      </body>
    </html>
  );
}
