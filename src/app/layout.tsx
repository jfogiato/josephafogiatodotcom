import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import BugReportButton from "@/components/BugReportButton";
import { Analytics } from "@vercel/analytics/next";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["200", "400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fogiato.com"),
  title: "Joseph A. Fogiato Dot Com",
  description: "Very weird.",

  openGraph: {
    title: "Joseph A. Fogiato",
    description: "Very weird.",
    url: "https://fogiato.com",
    siteName: "fogiato.com",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/me1.JPG",
        width: 1200,
        height: 630,
        alt: "Joseph A. Fogiato",
      },
    ],
  },

  appleWebApp: {
    title: "fogiato.com",
    statusBarStyle: "black-translucent",
  },

  keywords: [
    "Joseph Fogiato",
    "software",
    "photography",
    "Philadelphia",
    "developer",
  ],
  authors: [{ name: "Joseph Fogiato", url: "https://fogiato.com" }],
  creator: "Joseph A. Fogiato",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={raleway.variable}>
      <body className="font-mono antialiased">
        {children}
        <BugReportButton />
        <Analytics />
      </body>
    </html>
  );
}
