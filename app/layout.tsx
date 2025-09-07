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
    description:
        "Axioma empowers ambitious high school leaders with elite opportunities in innovation, policy, entrepreneurship, and global impact. Build your future with mentorship, events, and a world-class network.",
    keywords: [
        "Axioma",
        "high school leaders",
        "student leadership",
        "elite opportunities",
        "innovation challenges",
        "policy",
        "entrepreneurship",
        "mentorship",
        "youth leadership",
        "future leaders",
    ],
    openGraph: {
        type: "website",
        url: "https://axioma.co.in/",
        title: "Axioma | Elite Opportunities for High School Leaders",
        description:
            "Empowering ambitious high school leaders through innovation, policy, entrepreneurship, and global opportunities.",

    },

    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">


      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased pt-20 `}

      >
      <Navbar/>

      {children}
      <Footer/>

      </body>
    </html>
  );
}
