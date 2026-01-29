"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "motion/react";

import { cn } from "@/lib/utils";

export const ContainerScroll = ({
  titleComponent,
  children,
  containerClassName,
  cardClassName,
  cardInnerClassName,
  titleClassName,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
  containerClassName?: string;
  cardClassName?: string;
  cardInnerClassName?: string;
  titleClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.9, 1] : [1.08, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [12, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <div
      className={cn(
        "relative flex h-[46rem] items-center justify-center px-4 py-10 md:h-[60rem] md:px-12",
        containerClassName
      )}
      ref={containerRef}
    >
      <div
        className="relative w-full py-10 md:py-24"
        style={{
          perspective: "1200px",
        }}
      >
        <Header
          translate={translate}
          titleComponent={titleComponent}
          className={titleClassName}
        />
        <Card
          rotate={rotate}
          translate={translate}
          scale={scale}
          className={cardClassName}
          innerClassName={cardInnerClassName}
        >
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent, className }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className={cn("mx-auto max-w-4xl text-center", className)}
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
  className,
  innerClassName,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #00000026, 0 12px 28px #0000001f, 0 30px 40px #00000014, 0 60px 60px #0000000d",
      }}
      className={cn(
        "mx-auto -mt-10 h-[24rem] w-full max-w-4xl rounded-[28px] border border-black/15 bg-white p-4 shadow-2xl md:h-[32rem]",
        className
      )}
    >
      <div
        className={cn(
          "h-full w-full overflow-hidden rounded-2xl bg-white",
          innerClassName
        )}
      >
        {children}
      </div>
    </motion.div>
  );
};
