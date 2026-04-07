import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HK Transport Dashboard",
  description: "Hong Kong transport open data dashboard",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-HK">
      <body>{children}</body>
    </html>
  );
}
