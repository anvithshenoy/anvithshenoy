import Banner from "@/components/Banner";
import Tabs, { TabType } from "@/components/Tabs";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import AboutMe from "./Tabs/About";
import Resume from "./Tabs/Resume";

export default function Home() {
  const sections: TabType[] = [
    {
      id: "about-me",
      label: "About me",
      content: <AboutMe />,
      icon: (
        <Image
          src={"/cool-guy.svg"}
          alt=""
          role="presentation"
          width={24}
          height={24}
        />
      ),
    },
    {
      id: "my-resume",
      label: "Resume",
      content: <Resume />,
      icon: (
        <Image
          src={"/resume.svg"}
          alt=""
          role="presentation"
          width={24}
          height={24}
        />
      ),
    },
    {
      id: "work-exp",
      label: "Work",
      content: <div>{"I'm ready, but the content isn't"}</div>,
      icon: (
        <Image
          src={"/work.svg"}
          alt=""
          role="presentation"
          width={24}
          height={24}
        />
      ),
    },
  ];

  return (
    <>
      <div className="relative">
        <Suspense fallback={<div>Loading search params...</div>}>
          <Banner />
        </Suspense>

        <main className="mx-auto flex w-99 flex-col-reverse items-end justify-start gap-6 p-4 text-xl leading-relaxed sm:grid-cols-2 sm:flex-row">
          <p className="w-full max-w-prose px-1.5 text-start lowercase underline underline-offset-8 sm:text-end">
            #Work_in_progress #Shenoy_Devfolio #WIP{" "}
            <Link
              href={"https://www.google.com/search?q=anvithshenoy"}
              target="_blank"
            >
              #anvithshenoy
            </Link>
          </p>
          <div className="font-bg relative aspect-square size-full max-h-[75vh] max-w-[75vh] content-end overflow-hidden rounded-2xl bg-blue-700 p-4 inset-shadow-sm drop-shadow-md">
            <h1 className="text-bg z-10 text-6xl drop-shadow-md">
              {new Date().getFullYear()}
            </h1>
            <Image
              src={
                //   "https://anvithshenoy.vercel.app/myself.jpg"
                "https://images.unsplash.com/photo-1605092676920-8ac5ae40c7c8?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              fill
              alt=""
              role="presentation"
              className="-z-10 object-cover"
            />
          </div>
        </main>
      </div>

      <Tabs
        tabs={sections}
        className="grid grid-cols-1 px-3.5 py-2 sm:grid-cols-3 sm:gap-3.5"
      />
    </>
  );
}
