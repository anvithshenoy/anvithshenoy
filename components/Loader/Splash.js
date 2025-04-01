"use client";

import { motion } from "motion/react";
import Link from "next/link";

const Splash = ({ children }) => {
  return (
    <>
      <div className="h-1/3 w-full">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 323"
          className="flex h-full w-full fill-none"
        >
          <motion.path
            data-click="true"
            d="M363 311.5V11.5M363 311.5L627.024 16.5007C628.754 14.5683 627.382 11.5 624.789 11.5H363M363 311.5H624.789C627.382 311.5 628.754 308.432 627.024 306.499L363 11.5M363 311.5L271.75 161.5M363 311.5L139.125 236.5M271.75 161.5L183.125 15.8143C181.941 13.8695 179.108 13.8992 177.966 15.8683L12.0403 301.948C10.5059 304.593 13.45 307.57 16.1121 306.064L139.125 236.5M271.75 161.5L139.125 236.5"
            className="stroke-dark stroke-24 drop-shadow-xl [stroke-linecap:round] [stroke-linejoin:round]"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2.25,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </div>
      {children}
    </>
  );
};

export default Splash;

export const Error = () => {
  return (
    <Splash>
      <h1 className="font-head text-4xl">Oops</h1>
      <strong className="mb-1 text-center text-xs leading-none">
        Looks like the page you tryna access does not exist.
      </strong>
      <Link
        href="/"
        data-click="true"
        className="rounded-xs border border-light bg-dark px-2.5 py-0.5 text-xs font-bold text-light outline-hidden transition-colors duration-300 ease-in-out hover:bg-gray-900 focus:ring-2 focus:ring-dark focus:ring-offset-2 focus:ring-offset-light focus:hover:ring-gray-900"
      >
        Return Home
      </Link>
    </Splash>
  );
};
