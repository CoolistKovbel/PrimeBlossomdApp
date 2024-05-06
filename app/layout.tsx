import type { Metadata } from "next";
import { inter } from "./components/ui/font";

import "./globals.css";

export const metadata: Metadata = {
  title: "PrimeBlossomVault",
  description: "For people who are burnt out and need a break, wnat to relax but dont know how to express it",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
