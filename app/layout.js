import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./navbar";
import LenisScroll from "./lenis";

const thunderBoldHC = localFont({
  src: "./fonts/Thunder-BoldHC.woff",
  variable: "--font-thunder-bold-hc",
  weight: "100 900",
});
const thunderHC = localFont({
  src: "./fonts/Thunder-HC.woff",
  variable: "--font-thunder-hc",
  weight: "100 900",
});

export const metadata = {
  title: " Anvith Shenoy B • Portfolio",
  description: "Designed & maintained by Anvith Shenoy B.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${thunderBoldHC.variable} ${thunderHC.variable} font-body relative flex min-h-dvh w-dvw flex-col items-start justify-start overflow-x-hidden bg-dark text-light antialiased *:w-full`}
      >
        <Navbar />
        <LenisScroll>
          <main>{children}</main>
        </LenisScroll>
      </body>
    </html>
  );
}
