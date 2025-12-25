import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agency | Design-Led Web Experiences",
  description: "We design and build premium web experiences for founders & modern brands. Focused on clarity, performance, and long-term value.",
  keywords: ["Web Design Agency", "Web Development", "Next.js", "UI/UX Design", "Premium Websites"],
  authors: [{ name: "Agency" }],
  creator: "Agency",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://agency.com",
    siteName: "Agency - Design-Led Web Experiences",
    title: "Agency | Design-Led Web Experiences",
    description: "We design and build premium web experiences for founders & modern brands.",
  },
  robots: {
    index: true,
    follow: true,
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
