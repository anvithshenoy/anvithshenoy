import Tabs from "@/components/Tabs";
import Image from "next/image";
import AboutMe from "./Tabs/About";

export default function Home() {
  const sections = [
    {
      id: "about-me",
      label: "About me",
      content: <AboutMe />,
    },
    {
      id: "my-resume",
      label: "Resume",
      content: <div>{"I'm ready, but the content isn't"}</div>,
    },
    {
      id: "work-exp",
      label: "Work",
      content: <div>{"I'm ready, but the content isn't"}</div>,
    },
  ];

  return (
    <>
      <header className="inline-flex w-full items-center justify-start gap-2.5 border-b px-5 py-2.5 text-3xl">
        <div className="bg-fg relative aspect-square max-h-12 w-full max-w-12 overflow-hidden rounded-full">
          <Image
            src={
              "https://anvithshenoy.vercel.app/myself.jpg"
              //   "https://images.unsplash.com/photo-1605092676920-8ac5ae40c7c8?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            fill
            alt=""
            role="presentation"
            className="object-cover"
          />
        </div>
        <strong className="hidden uppercase sm:inline">Anvith Shenoy B</strong>
        <strong className="inline sm:hidden">Shenoy Devfolio</strong>

        <div className="flex-1" />

        <p className="hidden text-2xl sm:inline sm:border-l sm:px-4 sm:pe-0">
          Front End Devfolio
        </p>
      </header>

      <main className="mx-auto flex w-99 flex-col-reverse items-end justify-start gap-6 p-4 text-xl leading-relaxed sm:grid-cols-2 sm:flex-row">
        <p className="w-full max-w-prose px-1.5 text-start lowercase underline underline-offset-8 sm:text-end">
          #Work_in_progress #Shenoy_Devfolio #WIP #anvithshenoy
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

      <Tabs
        tabs={sections}
        className="grid grid-cols-1 divide-x divide-y px-3.5 py-2 sm:grid-cols-3 sm:gap-3.5"
      >
        <ul className="hidden justify-around gap-2.5 sm:inline-flex">
          {["About me", "Resume", "Work"].map((li, ind) => (
            <li key={li} className="icon">
              {ind}
            </li>
          ))}
        </ul>
      </Tabs>

      {/* <section className="grid grid-cols-1 divide-x divide-y *:px-3.5 *:py-2 sm:grid-cols-3">
        <h2 className="text-4xl">Experience</h2>
        <h2 className="text-4xl">Expertise</h2>
        <h2 className="text-4xl">Education</h2>
      </section> */}
    </>
  );
}
