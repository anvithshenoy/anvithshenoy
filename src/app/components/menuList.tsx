import { ListItem } from "@/components/Lists";

export const menuList: ListItem[] = [
  {
    id: "get-start",
    label: "Getting Started",
    children: [
      {
        id: "intro",
        label: "Introduction",
        route: "/",
      },
    ],
    expanded: true,
  },
  { id: "btn", label: "Button", route: "/button" },
  { id: "tabs", label: "Tabs", route: "/tabs" },
  { id: "card", label: "Card", route: "/card" },
  { id: "snippet", label: "Snippet", route: "/snippet" },
  { id: "calendar", label: "Calendar", route: "/calendar" },
  {
    id: "data-grid",
    label: "Data Grid",
    route: "/data-grid",
  },
];
