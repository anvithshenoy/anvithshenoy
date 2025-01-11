import Loader from "@/components/Loader/Loader";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from "next/font/local";
import { DataProvider } from "./context/DataContext";
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
  title: " Anvith Shenoy B • Portfolio",
  description:
    "Designed & maintained by Anvith Shenoy B. MCA graduate with a journey from graphic design to fullstack development, blending creativity with technical expertise. Experienced in crafting user-friendly, functional solutions with a focus on professionalism and simplicity. Eager to create impactful, intuitive user experiences.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`${thunderBoldHC.variable} ${thunderHC.variable} relative min-h-dvh w-dvw cursor-none overflow-x-hidden overscroll-none bg-light font-body antialiased`}
      >
        <Loader />
        <DataProvider>
          <main className="relative flex flex-col place-items-start gap-3">
            <LenisScroll>{children}</LenisScroll>
          </main>
        </DataProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
};

export default RootLayout;
