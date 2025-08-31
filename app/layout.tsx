import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {Navbar} from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Axioma || Elite Opportunities for High School Leaders",
  description: "Axioma provides high school students with impactful, real-world opportunities in diverse fields like entrepreneurship, policy, tech, and research. Through fellowships, competitions, and mentorship, we empower future leaders to make an impact now.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">


      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased pt-20`}

      >
      <Navbar/>

      {children}
      <Footer/>

      </body>
    </html>
  );
}
