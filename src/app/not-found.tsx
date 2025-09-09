import Link from "next/link";

import Header from "@/components/Header";

const NotFound = () => {
  return (
    <>
      <Header />
      <main className="relative flex h-[calc(100svh-4.3rem)] max-w-screen flex-col items-center justify-center gap-3.5 overflow-x-hidden">
        <h1 className="sr-only">404 - Page not found</h1>
        <div
          aria-hidden="true"
          className="font-head inline-flex items-center text-7xl leading-none uppercase"
        >
          4<span className="animate-pulse">o</span>4
        </div>
        <p>Looks like you found something that shouldn&apos;t exist yet.</p>

        <Link href={"/"} className="">
          Take me Home
        </Link>
      </main>
    </>
  );
};

export default NotFound;
