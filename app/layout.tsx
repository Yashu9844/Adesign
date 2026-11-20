import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adesign.tech"),
  title: "Adesign | Design-Led Web Experiences",
  description: "We design and build premium web experiences for founders & modern brands. Focused on clarity, performance, and long-term value.",
  keywords: ["Web Design Agency", "Web Development", "Next.js", "UI/UX Design", "Premium Websites"],
  authors: [{ name: "Adesign" }],
  creator: "Adesign",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adesign.tech",
    siteName: "Adesign - Design-Led Web Experiences",
    title: "Adesign | Design-Led Web Experiences",
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
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
