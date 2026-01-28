"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";

export const HeroParallax = ({
  products,
  title,
  subtitle,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
  title: string;
  subtitle: string;
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [12, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [10, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-400, 200]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="relative flex h-[260vh] flex-col overflow-hidden bg-white py-32 antialiased [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header title={title} subtitle={subtitle} />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="mb-16 flex flex-row-reverse space-x-reverse space-x-14">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="mb-16 flex flex-row space-x-14">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-14">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="relative mx-auto w-full max-w-6xl px-6 pb-24">
      <h1 className="font-display text-3xl font-semibold text-black md:text-6xl">
        {title}
      </h1>
      <p className="mt-6 max-w-2xl font-mono text-xs uppercase tracking-[0.3em] text-black/60 md:text-sm">
        {subtitle}
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -14,
      }}
      key={product.title}
      className="group/product relative h-72 w-[22rem] shrink-0 overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_24px_50px_rgba(0,0,0,0.12)]"
    >
      <a href={product.link} className="block h-full w-full">
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="absolute inset-0 h-full w-full object-cover"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 bg-black/40 opacity-0 transition duration-300 group-hover/product:opacity-100"></div>
      <h2 className="absolute bottom-5 left-5 font-mono text-xs uppercase tracking-[0.3em] text-white opacity-0 transition duration-300 group-hover/product:opacity-100">
        {product.title}
      </h2>
    </motion.div>
  );
};
