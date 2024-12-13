import Loader from "@/components/Loader/Loader";
import Footer from "@/components/profile/footer";
import localFont from "next/font/local";
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
  description: "Designed & maintained by Anvith Shenoy B.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`${thunderBoldHC.variable} ${thunderHC.variable} relative min-h-dvh w-dvw cursor-none overflow-x-hidden overscroll-none bg-light font-body antialiased`}
      >
        <Loader />
        <LenisScroll>
          <main>{children}</main>
        </LenisScroll>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
