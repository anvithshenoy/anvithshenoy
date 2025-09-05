import localFont from "next/font/local";

import Lenis from "@/components/Lenis";

import { SessionProvider } from "next-auth/react";
import "./globals.css";

const fontHead = localFont({
  src: "../fonts/integral.otf",
  variable: "--font-head",
});

const fontBody = localFont({
  src: "../fonts/TechniqueSans.otf",
  variable: "--font-body",
});

export const metadata = {
  title: "Anvith Shenoy B • Fullstack Developer Portfolio",
  description:
    "Anvith Shenoy B's portfolio showcasing expertise in graphic design, fullstack development, and user experience.",
  openGraph: {
    title: "Anvith Shenoy B • Portfolio",
    description:
      "Explore the journey of Anvith Shenoy B, blending creativity with technical expertise in fullstack development.",
    url: "https://www.anvithshenoy.vercel.app/",
    images: [
      {
        url: "https://www.anvithshenoy.vercel.app/myself.jpg",
        width: 1200,
        height: 630,
        alt: "Anvith Shenoy B Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anvith Shenoy B • Portfolio",
    description:
      "Showcasing the journey from graphic design to fullstack development.",
    image: "https://www.anvithshenoy.vercel.app/myself.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionProvider>
        <Lenis>
          <body className={`${fontHead.variable} ${fontBody.variable}`}>
            {children}
          </body>
        </Lenis>
      </SessionProvider>
    </html>
  );
}
