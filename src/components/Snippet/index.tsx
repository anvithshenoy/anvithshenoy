"use client";

import { toast } from "sonner";
import { twMerge } from "tailwind-merge";

const CodeSnippet = ({
  code,
  className,
  icon,
  onClick,
  unhideOnHover = false,
  tripleClickCopy = true,
}: {
  code: string;
  className?: string;
  icon?: React.ReactNode;
  onClick?: (() => void) | ((...args: unknown[]) => void);
  unhideOnHover?: boolean;
  tripleClickCopy?: boolean;
}) => {
  const copyCode = async (text: string) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "absolute";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.select();

        const success = document.execCommand?.("copy");
        document.body.removeChild(textarea);

        if (!success) throw new Error("Fallback copy failed");
      }

      toast.success("Code copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy code to clipboard.");
      console.error("Clipboard copy error:", err);
    }
    onClick?.();
  };

  const handleClicks = (e: React.MouseEvent) => {
    if (tripleClickCopy && e.detail === 3) return copyCode(code);
  };

  return (
    <section
      className={twMerge(
        "group flex items-center rounded-sm border p-3.5",
        className,
      )}
    >
      <code className="flex-1" onClick={handleClicks}>
        {code}
      </code>
      <button
        onClick={() => copyCode(code ?? "")}
        className={twMerge(
          "p-0",
          unhideOnHover &&
            "transition-opacity duration-300 ease-out group-hover:opacity-100 sm:opacity-0",
        )}
      >
        {icon ?? (
          <svg
            className="aspect-square h-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.9983 10C20.9862 7.82497 20.8897 6.64706 20.1213 5.87868C19.2426 5 17.8284 5 15 5H12C9.17157 5 7.75736 5 6.87868 5.87868C6 6.75736 6 8.17157 6 11V16C6 18.8284 6 20.2426 6.87868 21.1213C7.75736 22 9.17157 22 12 22H15C17.8284 22 19.2426 22 20.1213 21.1213C21 20.2426 21 18.8284 21 16V15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M3 10V16C3 17.6569 4.34315 19 6 19M18 5C18 3.34315 16.6569 2 15 2H11C7.22876 2 5.34315 2 4.17157 3.17157C3.51839 3.82475 3.22937 4.69989 3.10149 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>
    </section>
  );
};

export default CodeSnippet;
