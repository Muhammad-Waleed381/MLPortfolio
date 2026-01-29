"use client";
import React, { useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [isExpanded, setIsExpanded] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      setIsExpanded(current > 0.02);
    }
  });

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -60,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: isExpanded ? 1.06 : 0.98,
      }}
      transition={{
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(
        "fixed inset-x-0 top-4 z-[5000] mx-auto flex max-w-fit items-center justify-center space-x-4 rounded-full border border-black/20 bg-white/95 px-4 py-2 shadow-[0_12px_30px_rgba(0,0,0,0.12)] backdrop-blur sm:top-6 sm:space-x-6 sm:px-8",
        isExpanded && "px-10 py-3 shadow-[0_28px_60px_rgba(0,0,0,0.2)] sm:px-14 sm:py-4",
        className
      )}
    >
      {navItems.map((navItem, idx) => (
        <a
          key={`link=${idx}`}
          href={navItem.link}
          className={cn(
            "relative flex items-center space-x-1 font-mono text-xs uppercase tracking-[0.2em] text-black/70 transition hover:text-black"
          )}
        >
          <span className="block sm:hidden">{navItem.icon}</span>
          <span className="hidden sm:block">{navItem.name}</span>
        </a>
      ))}
    </motion.div>
  );
};
