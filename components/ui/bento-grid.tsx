import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-6 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-3xl border border-black/10 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-2 hover:border-black/30 hover:shadow-[0_30px_70px_rgba(0,0,0,0.12)]",
        className,
      )}
    >
      {header}
      <div className="transition duration-300 group-hover/bento:translate-x-2">
        {icon}
        <div className="mt-4 mb-2 font-display text-2xl font-semibold text-black">
          {title}
        </div>
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-black/60">
          {description}
        </div>
      </div>
    </div>
  );
};
