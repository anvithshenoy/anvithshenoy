"use client";

import { AnimatePresence, motion, stagger } from "motion/react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import Button from "@/components/Button";
import { AuthBtn } from "@/components/SignInOut";

import useScroll from "@/hooks/useScroll";
import { toggleDir } from "@/lib/utils";
import { useTheme } from "@/providers/Theme";

const listVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const listItemVariants = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  exit: { scale: 0.95 },
  whileHover: {
    scale: 1.125,
  },
};

export default function Header() {
  const { data: session } = useSession();
  const { dev: isDevMode, theme, changeTheme } = useTheme();

  const [menu, setMenu] = useState<boolean>(false);

  const displayMenu = () => {
    setMenu((prev) => !prev);
  };

  const switchTheme = () => {
    changeTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenu(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menu]);

  useScroll({ open: menu });

  return (
    <>
      <header
        className="bg-bg sticky top-0 z-50 inline-flex w-full items-center justify-center gap-2.5 border-b px-5 py-2.5 text-3xl sm:justify-start"
        data-disable-context
        onContextMenu={(e) => e.preventDefault()}
      >
        <div className="bg-fg relative aspect-square max-h-12 w-full max-w-12 overflow-hidden rounded-full">
          <Image
            src={
              session?.user?.image ??
              "https://anvithshenoy.vercel.app/myself.jpg"
              //   "https://images.unsplash.com/photo-1605092676920-8ac5ae40c7c8?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            fill
            alt=""
            role="presentation"
            className="z-0 object-cover object-top"
          />
          {isDevMode ? (
            <AuthBtn className="absolute inset-0 z-10 text-sm" text="" />
          ) : (
            <Link href={"/"} className="absolute inset-0 z-10 text-sm" />
          )}
        </div>
        <strong className="font-head hidden uppercase sm:inline">
          Anvith Shenoy B
        </strong>
        <strong className="font-head inline flex-1 text-center uppercase sm:hidden">
          Shenoy <span className="text-title">Devfolio</span>
        </strong>

        {session?.user && (
          <svg
            height={32}
            width={32}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="*:stroke-title sm:*:stroke-fg"
          >
            <path
              d="M8.5 12.5L10.5 14.5L15.5 9.5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.02907 13.0776C2.7032 12.3958 2.7032 11.6032 3.02907 10.9214C3.16997 10.6266 3.41023 10.3447 3.89076 9.78084C4.08201 9.55642 4.17764 9.44421 4.25796 9.32437C4.44209 9.04965 4.56988 8.74114 4.63393 8.41669C4.66188 8.27515 4.6736 8.12819 4.69706 7.83426C4.75599 7.09576 4.78546 6.72651 4.89427 6.41844C5.14594 5.70591 5.7064 5.14546 6.41893 4.89378C6.72699 4.78497 7.09625 4.7555 7.83475 4.69657C8.12868 4.67312 8.27564 4.66139 8.41718 4.63344C8.74163 4.56939 9.05014 4.4416 9.32485 4.25747C9.4447 4.17715 9.55691 4.08152 9.78133 3.89027C10.3452 3.40974 10.6271 3.16948 10.9219 3.02859C11.6037 2.70271 12.3963 2.70271 13.0781 3.02859C13.3729 3.16948 13.6548 3.40974 14.2187 3.89027C14.4431 4.08152 14.5553 4.17715 14.6752 4.25747C14.9499 4.4416 15.2584 4.56939 15.5828 4.63344C15.7244 4.66139 15.8713 4.67312 16.1653 4.69657C16.9038 4.7555 17.273 4.78497 17.5811 4.89378C18.2936 5.14546 18.8541 5.70591 19.1058 6.41844M4.89427 17.5806C5.14594 18.2931 5.7064 18.8536 6.41893 19.1053C6.72699 19.2141 7.09625 19.2435 7.83475 19.3025C8.12868 19.3259 8.27564 19.3377 8.41718 19.3656C8.74163 19.4297 9.05014 19.5574 9.32485 19.7416C9.44469 19.8219 9.55691 19.9175 9.78133 20.1088C10.3452 20.5893 10.6271 20.8296 10.9219 20.9705C11.6037 21.2963 12.3963 21.2963 13.0781 20.9705C13.3729 20.8296 13.6548 20.5893 14.2187 20.1088C14.4431 19.9175 14.5553 19.8219 14.6752 19.7416C14.9499 19.5574 15.2584 19.4297 15.5828 19.3656C15.7244 19.3377 15.8713 19.3259 16.1653 19.3025C16.9038 19.2435 17.273 19.2141 17.5811 19.1053C18.2936 18.8536 18.8541 18.2931 19.1058 17.5806C19.2146 17.2725 19.244 16.9033 19.303 16.1648C19.3264 15.8709 19.3381 15.7239 19.3661 15.5824C19.4301 15.2579 19.5579 14.9494 19.7421 14.6747C19.8224 14.5548 19.918 14.4426 20.1093 14.2182C20.5898 13.6543 20.8301 13.3724 20.971 13.0776C21.2968 12.3958 21.2968 11.6032 20.971 10.9214"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        )}

        <div className="inline sm:flex-1" />

        <p className="text-title hidden text-2xl sm:inline sm:border-l sm:px-4 sm:pe-0">
          Front End Devfolio
        </p>

        <Button className="bg-transparent p-0" onClick={displayMenu}>
          {menu ? (
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox={"0 0 32 32"}
              xmlSpace="preserve"
              className="aspect-square h-8 stroke-1 transition-transform duration-300 ease-out hover:rotate-45"
            >
              <motion.path
                className="fill-title sm:fill-fg"
                initial={{ opacity: 0, rotate: 45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 45 }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                }}
                d="M16,0C7.178,0,0,7.178,0,16s7.178,16,16,16s16-7.178,16-16S24.822,0,16,0z M16,31C7.729,31,1,24.271,1,16 S7.729,1,16,1s15,6.729,15,15S24.271,31,16,31z"
              />
              <motion.path
                className="fill-title sm:fill-fg"
                initial={{ opacity: 0, rotate: 45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 45 }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                }}
                d="M17.657,16.95c-0.195-0.195-0.512-0.195-0.707,0s-0.195,0.512,0,0.707l4.243,4.242 c0.098,0.098,0.226,0.146,0.354,0.146s0.256-0.049,0.354-0.146c0.195-0.195,0.195-0.512,0-0.707L17.657,16.95z"
              />
              <motion.path
                className="fill-title sm:fill-fg"
                initial={{ opacity: 0, rotate: 45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 45 }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                }}
                d="M10.808,10.101c-0.195-0.195-0.512-0.195-0.707,0s-0.195,0.512,0,0.707l4.243,4.242 c0.098,0.098,0.226,0.146,0.354,0.146s0.256-0.049,0.354-0.146c0.195-0.195,0.195-0.512,0-0.707L10.808,10.101z"
              />
              <motion.path
                className="fill-title sm:fill-fg"
                initial={{ opacity: 0, rotate: 45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 45 }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                }}
                d="M14.343,16.95l-4.243,4.242c-0.195,0.195-0.195,0.512,0,0.707c0.098,0.098,0.226,0.146,0.354,0.146 s0.256-0.049,0.354-0.146l4.243-4.242c0.195-0.195,0.195-0.512,0-0.707S14.539,16.755,14.343,16.95z"
              />
              <motion.path
                className="fill-title sm:fill-fg"
                initial={{ opacity: 0, rotate: 45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 45 }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                }}
                d="M21.192,10.101l-4.243,4.242c-0.195,0.195-0.195,0.512,0,0.707c0.098,0.098,0.226,0.146,0.354,0.146 s0.256-0.049,0.354-0.146l4.243-4.242c0.195-0.195,0.195-0.512,0-0.707S21.388,9.905,21.192,10.101z"
              />
            </svg>
          ) : (
            <motion.svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox={"0 0 24 24"}
              xmlSpace="preserve"
              className="aspect-square h-8"
            >
              <motion.path
                className="stroke-title fill-none stroke-1"
                d="M4 6H20"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                exit={{ pathLength: 0, opacity: 0 }}
                transition={{
                  type: "spring",
                  duration: 1,
                  ease: "easeOut",
                }}
              />
              <motion.path
                className="stroke-title fill-none stroke-1"
                d="M4 12H20"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                exit={{ pathLength: 0, opacity: 0 }}
                transition={{
                  type: "spring",
                  duration: 1,
                  ease: "easeOut",
                  delay: 0.1,
                }}
              />
              <motion.path
                className="stroke-title fill-none stroke-1"
                d="M4 18H20"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                exit={{ pathLength: 0, opacity: 0 }}
                transition={{
                  type: "spring",
                  duration: 1,
                  ease: "easeOut",
                  delay: 0.2,
                }}
              />
            </motion.svg>
          )}
        </Button>
      </header>

      <AnimatePresence mode="wait">
        {menu && (
          <motion.menu
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{
              type: "keyframes",
            }}
            className="bg-fg text-bg fixed right-0 z-50 flex h-dvh w-dvw flex-col items-center justify-center px-3.5 pt-1 pb-24 text-2xl"
          >
            <motion.ul
              className="font-head grid grid-cols-1 gap-2 *:drop-shadow-md sm:grid-cols-[auto_auto_auto] sm:gap-y-8"
              variants={listVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                delayChildren: stagger(0.25),
                type: "spring",
              }}
            >
              {links
                .filter((link) => !link.disabled)
                .map((link) => (
                  <motion.li
                    key={link.href}
                    variants={listItemVariants}
                    className="bg-title hover:bg-title/85 text-bg rounded-full px-5 py-3.5 text-center transition-colors duration-300 ease-out sm:-rotate-6 sm:even:rotate-6"
                  >
                    <Link href={link.href} onClick={displayMenu}>
                      {link.text}
                    </Link>
                  </motion.li>
                ))}

              <motion.li
                variants={listItemVariants}
                className="bg-title hover:bg-title/85 text-bg cursor-pointer rounded-full px-5 py-3.5 text-center transition-colors duration-300 ease-out sm:-rotate-6 sm:even:rotate-6"
                onClick={switchTheme}
              >
                Switch Theme
              </motion.li>
              <motion.li
                variants={listItemVariants}
                className="bg-title hover:bg-title/85 text-bg cursor-pointer rounded-full px-5 py-3.5 text-center transition-colors duration-300 ease-out sm:col-span-2 sm:-rotate-6 sm:even:rotate-6"
                onClick={() => toggleDir()}
              >
                Switch Direction
              </motion.li>
            </motion.ul>
          </motion.menu>
        )}
      </AnimatePresence>
    </>
  );
}

const links: {
  href: string;
  text: string | React.ReactNode;
  disabled?: boolean;
}[] = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/components",
    text: "Components",
    // disabled: true,
  },
];
