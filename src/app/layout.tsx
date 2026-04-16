import type { Metadata } from "next";
import { Playfair_Display, Amiri, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://you-are-invited-beige.vercel.app"),
  title: "Fida & Sufair — Wedding Invitation",
  description:
    "You are cordially invited to the Nikah ceremony of Fida Shamsuddin & Sufair Ali on May 17, 2025 at Kodakad Bank Auditorium, Kasargod, Kerala.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Fida & Sufair — Wedding Invitation",
    description:
      "Join us in celebrating the union of Fida & Sufair. Nikah on May 17, 2025.",
    url: "https://you-are-invited-beige.vercel.app",
    type: "website",
    siteName: "Fida & Sufair Wedding",
    images: [
      {
        url: "/fsog.png",
        width: 1200,
        height: 630,
        alt: "Fida & Sufair Wedding Invitation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fida & Sufair — Wedding Invitation",
    description:
      "Join us in celebrating the union of Fida & Sufair. Nikah on May 17, 2025.",
    images: ["/fsog.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${amiri.variable} ${cormorant.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
