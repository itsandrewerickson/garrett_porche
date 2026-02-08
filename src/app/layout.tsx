import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0A0A0A",
};

export const metadata: Metadata = {
  title: "Griffin Diagnostics | Remote Porsche PIWIS Support & Master Consulting",
  description:
    "Direct access to a Porsche Master Technician. Solve complex electrical and mechanical faults without the dealership runaround. Remote PIWIS support, DME diagnostics, and expert fault isolation.",
  keywords: [
    "Porsche Master Technician",
    "PIWIS support",
    "DME repair",
    "911 diagnostics",
    "remote mechanic",
    "Porsche diagnostics",
    "Porsche fault isolation",
    "997 diagnostics",
    "991 diagnostics",
    "992 diagnostics",
    "Porsche electrical diagnosis",
    "Porsche CAN bus",
  ],
  authors: [{ name: "Griffin Diagnostics" }],
  openGraph: {
    title: "Griffin Diagnostics | Remote Porsche PIWIS Support & Master Consulting",
    description:
      "Direct access to a Porsche Master Technician. Solve complex electrical and mechanical faults without the dealership runaround.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Griffin Diagnostics | Porsche Master Consulting",
    description: "Remote PIWIS support and Master-level Porsche diagnostics on demand.",
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
