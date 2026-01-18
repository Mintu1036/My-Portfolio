import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GlassHeader from "./components/GlassHeader";
import SocialFloat from "./components/SocialFloat";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhilash Balabadra",
  description: "Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="{`${gwistSans.variable} ${geistMono.variable} antialiased`}">
        <GlassHeader />
        {children}
        <SocialFloat />
      </body>
    </html>
  ); 
}