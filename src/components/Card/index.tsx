import { HTMLMotionProps, motion } from "motion/react";
import { twMerge } from "tailwind-merge";

interface CardProps extends HTMLMotionProps<"div"> {
  cardTitle: string | React.ReactNode;
  tag?: string;
  children: React.ReactNode;
  cardClass?: string;
  className?: string;
}

export default function Card(props: CardProps) {
  const { cardTitle, tag, children, cardClass, className, ...rest } = props;

  return (
    <motion.div
      className={twMerge(
        "bg-fg text-bg grid h-full grid-cols-2 gap-1 rounded-2xl p-3.5",
        cardClass,
      )}
      {...rest}
    >
      <div className={twMerge("text-2xl", !tag && "col-span-2")}>
        {cardTitle}
      </div>
      {tag && (
        <div className="bg-bg text-fg ms-auto rounded-full px-3.5 py-1 font-bold">
          {tag}
        </div>
      )}
      <div className={twMerge("col-span-2 w-full", className)}>{children}</div>
    </motion.div>
  );
}
