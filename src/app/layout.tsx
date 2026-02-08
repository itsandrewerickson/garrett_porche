import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0A0A0A",
};

export const metadata: Metadata = {
  title: "Griffin Diagnostics | Expert Porsche Diagnostic Services",
  description:
    "Expert-level Porsche diagnosis for independent shops and DIY enthusiasts. Founded by a Porsche Master-Certified technician with 20+ years experience. Remote and in-person diagnostic sessions.",
  keywords: [
    "Porsche diagnostics",
    "Porsche diagnosis",
    "Porsche fault isolation",
    "independent Porsche shop",
    "Porsche DIY",
    "Porsche master technician",
    "remote Porsche diagnostics",
    "Porsche troubleshooting",
  ],
  authors: [{ name: "Griffin Diagnostics" }],
  openGraph: {
    title: "Griffin Diagnostics | Expert Porsche Diagnostic Services",
    description:
      "Expert-level Porsche diagnosis for independent shops and DIY enthusiasts. 20+ years of Master-Certified experience.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Griffin Diagnostics",
    description: "Expert Porsche diagnostics from a Master-Certified technician.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800&family=Barlow+Condensed:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#0A0A0A] text-[#F5F5F5]">
        {children}
      </body>
    </html>
  );
}
