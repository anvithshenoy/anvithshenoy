import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex w-full place-items-baseline gap-x-1.5 rounded-ee bg-light px-1 text-xs text-dark">
      <h1 className="font-head flex-1 truncate text-lg">Anvith Shenoy B</h1>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}
