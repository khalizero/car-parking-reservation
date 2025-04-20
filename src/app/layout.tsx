import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "PASPARK – Reserve Parking Effortlessly",
  description:
    "Reserve your parking spot instantly with PASPARK. Hassle-free parking at malls, airports, offices, and more.",
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-32x32.png",
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    title: "PASPARK – Reserve Parking Effortlessly",
    description:
      "Instantly find and reserve parking in busy areas. From office spaces to shopping centers, PASPARK makes parking easy.",
    url: "https://paspark.com",
    siteName: "PASPARK",
    images: [
      {
        url: "/og-image.png", // Optional but recommended
        width: 1200,
        height: 630,
        alt: "PASPARK App Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PASPARK – Reserve Parking Effortlessly",
    description:
      "Find and reserve parking spots in seconds with PASPARK. Simplify your commute, stress-free.",
    images: ["/og-image.png"], // Optional
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
