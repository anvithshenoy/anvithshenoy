import DropIn from "@/components/framer/DropIn";

export default function Home() {
  return (
    <div className="flex h-full flex-col items-start justify-start px-0.5">
      <DropIn>
        <h2 className="font-head text-3xl">Home Page</h2>
        <button>Bruh</button>
      </DropIn>
      <DropIn>
        <h2 className="font-head text-3xl">Section 1</h2>
      </DropIn>
      <DropIn>
        <h2 className="font-head text-3xl">Section 2</h2>
      </DropIn>
      <DropIn>
        <h2 className="font-head text-3xl">Section 3</h2>
      </DropIn>
      <DropIn>
        <h2 className="font-head text-3xl">Section 4</h2>
      </DropIn>
    </div>
  );
}
