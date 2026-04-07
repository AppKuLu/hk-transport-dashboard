import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HK Transport Dashboard",
  description: "Hong Kong transport dashboard"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
