import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ 
  subsets: ["latin"],
  variable: "--font-geist",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Daily Outfit Planner — Bright Winter Edition",
  description: "Seasonal color analysis meets daily fashion. Curated outfits for Bright Winter palettes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
