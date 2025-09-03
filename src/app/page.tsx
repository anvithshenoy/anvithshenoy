import Image from "next/image";
import Link from "next/link";

import Tabs, { TabType } from "@/components/Tabs";

import Banner from "@/components/Banner";
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
      condition: false,
    },
  ];

  return (
    <>
      <main className="relative">
        <Banner />

        <section className="mx-auto flex w-99 flex-col-reverse items-end justify-start gap-6 p-4 text-xl leading-relaxed sm:grid-cols-2 sm:flex-row">
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
        </section>
      </main>

      <Tabs tabs={sections} />
    </>
  );
}
