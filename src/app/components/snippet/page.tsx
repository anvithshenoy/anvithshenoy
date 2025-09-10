import Snippet from "@/components/Snippet";

const SnippetDetails = () => {
  return (
    <>
      <h1 className="text-2xl">Snippet</h1>
      <p>
        The CodeSnippet component is a React component designed to display code
        examples clearly and allow users to copy them easily.
      </p>
      <p>
        When a user clicks the copy button, the component copies the displayed
        code and shows a small notification to confirm the action. The component
        uses Tailwind CSS for styling and supports adding custom styles or icons
        for flexibility. This makes it a great choice to include interactive
        code snippets in documentation, tutorials, or any website showing code
        examples.
      </p>

      <div className="max-w-prose">
        <Snippet
          code="npm i sonner tailwindcss tailwind-merge"
          className="text-title break-keep"
        />
      </div>
    </>
  );
};

export default SnippetDetails;
