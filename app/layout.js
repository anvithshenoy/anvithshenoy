import Loader from "@/components/Loader/Loader";
import localFont from "next/font/local";
import { DataProvider } from "./context/DataContext";
import { ThemeProvider } from "./context/ThemeContext";
import "./globals.css";
import LenisScroll from "./lenis";

const thunderBoldHC = localFont({
  src: "./fonts/Thunder-BoldHC.woff",
  variable: "--font-thunder-bold-hc",
});
const thunderHC = localFont({
  src: "./fonts/Thunder-HC.woff",
  variable: "--font-thunder-hc",
});

export const metadata = {
  title: "Anvith Shenoy B • Fullstack Developer Portfolio",
  description:
    "Anvith Shenoy B's portfolio showcasing expertise in graphic design, fullstack development, and user experience.",
  openGraph: {
    title: "Anvith Shenoy B • Portfolio",
    description:
      "Explore the journey of Anvith Shenoy B, blending creativity with technical expertise in fullstack development.",
    url: "https://www.anvithshenoy.cloud/",
    images: [
      {
        url: "https://www.anvithshenoy.cloud/myself.jpg",
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
    image: "https://www.anvithshenoy.cloud/myself.jpg",
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`${thunderBoldHC.variable} ${thunderHC.variable} relative min-h-dvh w-dvw cursor-none overflow-x-hidden overscroll-none bg-light font-body antialiased`}
      >
        <Loader />
        <ThemeProvider>
          <DataProvider>
            <main className="relative flex flex-col place-items-start gap-3">
              <LenisScroll>{children}</LenisScroll>
            </main>
          </DataProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
