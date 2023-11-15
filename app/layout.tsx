import type { Metadata, Viewport } from "next";
import "./globals.css";
import React from "react";
import { Fira_Code } from "next/font/google";

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
  themeColor: "#fff",
};

const font = Fira_Code({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh" className={font.className}>
      <body>{children}</body>
    </html>
  );
}
