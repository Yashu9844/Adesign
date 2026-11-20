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
  title: "Adesign | Websites, Apps & Automation That Grow Your Business",
  description: "Websites, apps and automation that bring you more customers, delivered on time and built around your business.",
  keywords: ["Website Design", "App Development", "Business Automation", "Web Design Agency Bengaluru", "Get More Customers Online"],
  authors: [{ name: "Adesign" }],
  creator: "Adesign",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adesign.tech",
    siteName: "Adesign - Websites, Apps & Automation",
    title: "Adesign | Websites, Apps & Automation That Grow Your Business",
    description: "Websites, apps and automation that bring you more customers, delivered on time.",
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
