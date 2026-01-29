"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = ["#ffffff", "#f5f5f5", "#ededed"];
  const linearGradients = [
    "linear-gradient(to bottom right, #ffffff, #d9d9d9)",
    "linear-gradient(to bottom right, #f8f8f8, #e5e5e5)",
    "linear-gradient(to bottom right, #f0f0f0, #d0d0d0)",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0],
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex h-[30rem] justify-center space-x-10 overflow-y-auto rounded-3xl border border-black/10 p-8"
      ref={ref}
    >
      <div className="relative flex items-start px-2">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-16">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="font-display text-2xl font-semibold text-black"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="mt-6 max-w-sm font-mono text-xs uppercase tracking-[0.2em] text-black/60"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-28" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-6 hidden h-64 w-80 overflow-hidden rounded-2xl border border-black/10 bg-white lg:block",
          contentClassName,
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
