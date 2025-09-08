import Link from "next/link";

import Header from "@/components/Header";
import CollapsibleList from "@/components/Lists";

import { menuList } from "./menuList";

const Components = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />

      <main className="relative flex w-full items-start gap-3.5">
        <aside
          role="menubar"
          className="bg-bg sticky top-0 right-0 hidden h-full w-full flex-col gap-1.5 overflow-auto border-x p-2.5 sm:top-18 sm:inline-flex sm:h-[calc(100dvh-4.375rem)] sm:max-w-3xs"
        >
          <CollapsibleList
            items={menuList}
            route={{
              defaultRoute: "/components",
            }}
          />

          <Link href={"/"} className="mt-auto px-2.5">
            Home
          </Link>
        </aside>

        <section className="h-full w-full flex-1 space-y-3.5 p-4 *:leading-relaxed">
          {children}
        </section>
      </main>
    </>
  );
};

export default Components;
