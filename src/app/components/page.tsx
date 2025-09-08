import Button from "@/components/Button";
import CodeSnippet from "@/components/Snippet";
import Tabs from "@/components/Tabs";

const codeSnippets = [
  {
    id: "npm",
    label: "npm",
    content: (
      <CodeSnippet
        code="npm i tailwindcss tailwind-merge motion sonner"
        unhideOnHover
        className="rounded-none"
      />
    ),
  },
  {
    id: "pnpm",
    label: "pnpm",
    content: (
      <CodeSnippet
        code="pnpm add tailwindcss tailwind-merge motion sonner"
        unhideOnHover
        className="rounded-none"
      />
    ),
  },
  {
    id: "yarn",
    label: "yarn",
    content: (
      <CodeSnippet
        code="yarn add tailwindcss tailwind-merge motion sonner"
        className="rounded-none"
      />
    ),
  },
];

const Intro = () => {
  return (
    <>
      <h1 className="mb-2.5 text-2xl capitalize">Getting started</h1>
      <p>
        This is a small, minimal React webpage designed for developers to easily
        copy, paste, and customize components in their projects. It leverages a
        few essential dependencies like Tailwind CSS for styling,{" "}
        <code>tailwind-merge</code> for managing class names, and{" "}
        <code>motion/react</code> for smooth animations. By keeping dependencies
        light and focused, this setup helps developers quickly integrate
        flexible and reusable UI components without unnecessary bloat.
      </p>

      <div className="max-w-prose">
        <Tabs
          tabs={codeSnippets}
          tabClassName="p-0 gap-0 border border-b-0 text-base"
          tabIndicatorClassName="rounded-none!"
          reduceMotion
        />
      </div>

      <div className="w-full">
        <Button rounded="rounded-md" outlined className="bg-fg text-bg my-3.5">
          Button
        </Button>
      </div>
    </>
  );
};

export default Intro;
