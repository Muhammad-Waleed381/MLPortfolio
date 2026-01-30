"use client";
import { useScroll, useTransform, motion, useMotionValueEvent, useSpring } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end 0.1"],
  });

  const smoothScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const total = data.length;

  useMotionValueEvent(smoothScrollYProgress, "change", (latest: number) => {
    const breakpoints = data.map((_, index) => index / total);
    const closest = breakpoints.reduce((acc, point, index) => {
      const distance = Math.abs(latest - point);
      if (distance < Math.abs(latest - breakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);
    setActiveIndex(closest);
  });

  const heightTransform = useTransform(smoothScrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(smoothScrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-white font-sans md:px-10" ref={containerRef}>
      <div
        ref={ref}
        className="relative mx-auto max-w-6xl pb-64"
      >
        {data.map((item, index) => (
          <motion.div
            key={item.title}
            className="flex justify-start pt-10 md:pt-32 md:gap-10"
            animate={{
              opacity: activeIndex === index ? 1 : 0.35,
              y: activeIndex === index ? 0 : 20,
            }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="sticky top-28 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
              <div className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-white">
                <div
                  className={
                    activeIndex === index
                      ? "h-3 w-3 rounded-full bg-black"
                      : "h-3 w-3 rounded-full border border-black/20 bg-black/30"
                  }
                />
              </div>
              <h3 className="hidden text-xl font-semibold text-black/60 md:block md:pl-20 md:text-3xl">
                {item.title}
              </h3>
            </div>

            <div className="relative w-full pl-20 pr-4 md:pl-4">
              <h3 className="mb-4 block text-2xl font-semibold text-black/60 md:hidden">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </motion.div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-8 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-black/10 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-black via-black/60 to-transparent"
          />
        </div>
      </div>
    </div>
  );
};
