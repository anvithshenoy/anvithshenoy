import { ContextList } from "@/components/ContextMenu";

import { changeMode, toggleDir } from "@/lib/utils";

const Menu: ContextList[] = [
  {
    id: "light-mode",
    label: "Light Mode",
    startIcon: (
      <svg
        height={24}
        width={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2V3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M12 21V22"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M22 12L21 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M3 12L2 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M19.0708 4.92969L18.678 5.32252"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M5.32178 18.6777L4.92894 19.0706"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M19.0708 19.0703L18.678 18.6775"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M5.32178 5.32227L4.92894 4.92943"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M6.34141 10C6.12031 10.6256 6 11.2987 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C11.2987 6 10.6256 6.12031 10 6.34141"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    onClick() {
      changeMode("light");
    },
  },
  {
    id: "dark-mode",
    label: "Dark Mode",
    startIcon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    onClick() {
      changeMode("dark");
    },
  },
  {
    id: "direction",
    label: "Switch Reading Direction",
    startIcon: (
      <svg
        height={16}
        width={24}
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke="currentColor"
          d="M19.29894,13.097555 C19.9200379,13.097555 20.2332042,13.8469628 19.7969407,14.2892722 L14.369746,19.7916791 C14.0983279,20.0668585 13.6553376,20.0697948 13.3802994,19.7982374 C13.1052612,19.52668 13.1023265,19.0834622 13.3737445,18.8082827 L17.6255116,14.497593 L0.703482198,14.497593 C0.317070803,14.497593 0.00382247492,14.1841838 0.00382247492,13.797574 C0.00382247492,13.4109642 0.317070803,13.097555 0.703482198,13.097555 L19.29894,13.097555 Z M6.61970059,0.201762638 C6.89473881,0.473320047 6.89767354,0.91653784 6.62625551,1.19171729 L2.37448841,5.50240698 L19.2965178,5.50240698 C19.6829292,5.50240698 19.9961775,5.81581617 19.9961775,6.20242599 C19.9961775,6.58903581 19.6829292,6.902445 19.2965178,6.902445 L0.701060011,6.902445 C0.0799621139,6.902445 -0.233204177,6.15303716 0.203059275,5.7107278 L5.63025404,0.208320918 C5.90167207,-0.0668585286 6.34466238,-0.0697947706 6.61970059,0.201762638 Z"
        />
      </svg>
    ),
    onClick: toggleDir,
  },
  {
    id: "inspect",
    label: "Inspect",
    startIcon: (
      <div className="aspect-square h-6 rounded-sm border py-1 text-center text-xs uppercase">
        f12
      </div>
    ),
    onClick() {
      document.dispatchEvent(
        new KeyboardEvent("keydown", {
          ctrlKey: true,
          shiftKey: true,
          key: "I",
        }),
      );
    },
    disabled: true,
  },
];

export default Menu;
