import { twMerge } from "tailwind-merge";

const Card = ({
  title,
  tag,
  children,
  cardClass,
  className,
}: {
  title: string | React.ReactNode;
  tag?: string;
  children: React.ReactNode;
  cardClass?: string;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "bg-fg text-bg grid grid-cols-2 items-center gap-1 rounded-2xl p-3.5",
        cardClass,
      )}
    >
      <div className="text-2xl">{title}</div>
      {tag && (
        <div className="bg-bg text-fg ms-auto rounded-full px-3.5 py-1 font-bold">
          {tag}
        </div>
      )}
      <div className={twMerge("col-span-2 w-full", className)}>{children}</div>
    </div>
  );
};

export default Card;
