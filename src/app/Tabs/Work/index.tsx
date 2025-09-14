"use client";

import { useEffect, useRef } from "react";
import { createSwapy, Swapy } from "swapy";

import Card from "@/components/Card";
import { SwapyTitle } from "@/components/Tabs";

const workDetails: {
  id: string;
  title: string | React.ReactNode;
  content: string | number | React.ReactNode;
  onClick?: () => void | ((...args: unknown[]) => void);
}[] = [
  {
    id: "work1",
    title: "Work 1",
    content: "Duis mollit labore duis do adipisicing sint.",
  },
  {
    id: "work2",
    title: "Work 2",
    content:
      "Irure non ut ut mollit duis laborum ullamco anim ex ipsum sunt cupidatat enim.",
  },
];

export default function Work() {
  const swapy = useRef<Swapy | null>(null);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) {
      swapy.current = createSwapy(container.current);
    }

    return () => {
      swapy.current?.destroy();
    };
  }, []);

  return (
    <div
      ref={container}
      className="grid grid-cols-1 gap-2.5 px-3.5 py-2 *:even:border-y *:even:py-2.5 sm:grid-cols-3 sm:gap-3.5 sm:*:even:border-x sm:*:even:border-y-0 sm:*:even:px-2.5 sm:*:even:py-0"
    >
      {workDetails.map((el) => (
        <div key={el.id} data-swapy-slot={el.id} className="">
          <Card
            data-swapy-item={el.id}
            cardTitle={
              <SwapyTitle title={el.title ?? "Title"} clx="indent-0" />
            }
            onClick={el?.onClick}
          >
            {el.content}
          </Card>
        </div>
      ))}
    </div>
  );
}
