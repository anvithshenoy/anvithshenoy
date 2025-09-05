import Image from "next/image";

import Header from "@/components/Header";
import Tabs, { TabType } from "@/components/Tabs";
import HeroSection from "./Hero";
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
        <Header />

        <HeroSection />
      </main>

      <Tabs tabs={sections} tabClassName="sticky top-0 z-40" />
    </>
  );
}
