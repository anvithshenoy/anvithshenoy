"use client";

import { useRouter } from "next/navigation";
import { menuList } from "./menuList";

import Header from "@/components/Header";
import CollapsibleList, { ListItem } from "@/components/Lists";
import sitemap from "./sitemap";

const Components = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const handleSelect = (item: ListItem) => {
    const matched = sitemap.find((entry) => entry.id.includes(item.id));

    if (matched?.route) {
      router.push(`/components${matched.route}`);
    } else router.push("/components/placeholder");
  };

  return (
    <div className="relative">
      <Header />

      <main className="relative flex items-start gap-3.5">
        <aside className="bg-bg sticky top-0 right-0 hidden h-full w-full flex-col gap-1.5 overflow-auto border-e p-2.5 px-2.5 sm:top-18 sm:inline-flex sm:h-[calc(100dvh-4.375rem)] sm:max-w-3xs">
          <CollapsibleList items={menuList} onSelect={handleSelect} />
        </aside>

        <section className="h-full w-99 flex-1 space-y-3.5 p-4 *:leading-relaxed">
          {children}
        </section>
      </main>
    </div>
  );
};

export default Components;
