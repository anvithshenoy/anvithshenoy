"use client";

import { CodeBlock } from "@/components/CodeBlock";
import Tabs from "@/components/Tabs";
import { TabsCode } from "./source";

export default function MyTabs() {
  return (
    <div>
      <Tabs
        defaultTab="preview"
        tabClassName="w-full"
        className="w-full"
        tabs={[
          {
            id: "preview",
            label: "Preview",
            content: (
              <div className="rounded-lg border p-6">{/* <Tabs /> */}</div>
            ),
          },
          {
            id: "code",
            label: "Code",
            content: (
              <div className="w-full overflow-hidden">
                <CodeBlock code={TabsCode} />
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}
