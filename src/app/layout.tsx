import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0F1115",
};

export const metadata: Metadata = {
  title: "Garrett Porsche Diagnostics | Master Technician Remote Consulting",
  description:
    "Expert Porsche diagnostics from a Level 3 Master Technician. Get a guaranteed diagnosis within 3 business hours. 17 years experience, Porsche & BMW Master Certified.",
  keywords: [
    "Porsche diagnostics",
    "Porsche mechanic",
    "remote car diagnostics",
    "Porsche master technician",
    "car noise diagnosis",
    "Porsche retrofit",
    "Porsche CarPlay",
  ],
  authors: [{ name: "Garrett" }],
  openGraph: {
    title: "Garrett Porsche Diagnostics | Master Technician Remote Consulting",
    description:
      "Expert Porsche diagnostics from a Level 3 Master Technician. Guaranteed diagnosis within 3 business hours.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garrett Porsche Diagnostics",
    description: "Expert Porsche diagnostics from a Level 3 Master Technician.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-[#0F1115] text-[#EAEAEA]`}
      >
        {children}
      </body>
    </html>
  );
}
