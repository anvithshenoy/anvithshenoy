import Header from "@/components/Header";
import { ScrollTopButton } from "@/components/ScrollTop";
import Tabs, { TabType } from "@/components/Tabs";
import HeroSection from "./Hero";
import AboutMe from "./Tabs/About";
import Resume from "./Tabs/Resume";
import Work from "./Tabs/Work";

export default function Home() {
  const sections: TabType[] = [
    {
      id: "about-me",
      label: "About me",
      content: <AboutMe />,
      icon: (
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-none stroke-2"
        >
          <path d="M6.84,5.15A5.46,5.46,0,0,1,12,1.5a5.39,5.39,0,0,1,3.87,1.61,5.26,5.26,0,0,1,1.29,2" />
          <path d="M17.48,5.15V9.72H12.91a1,1,0,0,0-1.82,0H6.52V5.15Z" />
          <path d="M17.4,9.72a5.48,5.48,0,0,1-10.8,0" />
          <path d="M2,22.5C2,18,6.45,14.28,12,14.28S22,18,22,22.5" />
          <line x1="4.7" y1="6.98" x2="6.52" y2="6.98" />
          <line x1="17.48" y1="6.98" x2="19.3" y2="6.98" />
        </svg>
      ),
    },
    {
      id: "my-resume",
      label: "Resume",
      content: <Resume />,
      icon: (
        <svg
          height={24}
          width={24}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
        >
          <path d="M276.239,252.183c-6.37,2.127-13.165,3.308-20.239,3.308c-7.074,0-13.87-1.181-20.24-3.308 c-46.272,7.599-70.489,41.608-70.489,82.877H256h90.728C346.728,293.791,322.515,259.782,276.239,252.183z" />
          <path d="M256,240.788c27.43,0,49.658-22.24,49.658-49.666v-14.087c0-27.426-22.228-49.659-49.658-49.659 c-27.43,0-49.658,22.233-49.658,49.659v14.087C206.342,218.548,228.57,240.788,256,240.788z" />
          <path d="M378.4,0H133.582C86.234,0,47.7,38.542,47.7,85.899v340.22C47.7,473.476,86.234,512,133.582,512h205.695 h13.175l9.318-9.301l93.229-93.229l9.301-9.31v-13.174V85.899C464.3,38.542,425.766,0,378.4,0z M432.497,386.985H384.35 c-24.882,0-45.074,20.183-45.074,45.073v48.139H133.582c-29.866,0-54.078-24.221-54.078-54.078V85.899 c0-29.874,24.212-54.096,54.078-54.096H378.4c29.876,0,54.096,24.222,54.096,54.096V386.985z" />
        </svg>
      ),
    },
    {
      id: "work-exp",
      label: "Work",
      content: <Work />,
      icon: (
        <svg
          height={24}
          width={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 7H5C3.89543 7 3 7.89543 3 9V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V9C21 7.89543 20.1046 7 19 7H15M9 7V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7M9 7H15"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      <main className="relative">
        <Header />
        <HeroSection />
      </main>

      <Tabs
        defaultTab={sections[1].id}
        tabs={sections}
        className="min-h-[50vh] overflow-hidden"
        tabClassName="sticky top-0 z-40 bg-bg"
        tabIndicatorClassName="bg-title!"
      />

      <ScrollTopButton className="fill-title!" />
    </>
  );
}
