import DropIn from "@/components/framer/DropIn";
import Link from "next/link";

const Navbar = () => {
  return (
    <DropIn>
      <nav className="sticky top-0 z-50 flex w-full place-items-baseline gap-x-1.5 rounded-ee bg-light px-1 text-xs text-dark">
        <p className="flex-1 truncate font-head text-base sm:text-lg">
          Anvith Shenoy B
        </p>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
    </DropIn>
  );
};

export default Navbar;
