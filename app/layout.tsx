import type { Metadata } from "next";
import { inter } from "./components/ui/font";

import FooterMain from "./components/footer";
import MainHeader from "./components/main-header";
import { ToastContainer} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./globals.css";


export const metadata: Metadata = {
  title: "PrimeBlossom Vault",
  description: "For people who are burnt out and need a break, wnat to relax but dont know how to express it",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainHeader />
        {children}
        <ToastContainer />
        <FooterMain />
      </body>
    </html>
  );
}
