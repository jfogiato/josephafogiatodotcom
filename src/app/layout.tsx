import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import BugReportButton from "@/components/BugReportButton";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["200", "400"],
});

export const metadata: Metadata = {
  title: "Joseph A. Fogiato Dot Com",
  description: "Weird.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={raleway.variable}>
      <body className="font-mono antialiased">
        {children}
        <BugReportButton />
      </body>
    </html>
  );
}
