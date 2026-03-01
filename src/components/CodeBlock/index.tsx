"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark, solarizedDarkAtom } from "react-syntax-highlighter/dist/esm/styles/prism";

export const CodeBlock = ({ code }: { code: string }) => {
  return (
    <SyntaxHighlighter language="tsx" style={solarizedDarkAtom}>
      {code}
    </SyntaxHighlighter>
  );
};
