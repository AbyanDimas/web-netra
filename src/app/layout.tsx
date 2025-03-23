import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

import Navbar from "./components/navbar/Main";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Netra FrontPage | SMKN 1 Adiwerna",
  description: "Halaman informasi Netra SMK Negeri 1 Adiwerna",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
