"use client"

import { ComponentPropsWithoutRef, FC, ReactNode, useRef } from "react"
import { motion, MotionValue, useScroll, useTransform } from "motion/react"

import { cn } from "@/lib/utils"

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string
}

export const TextReveal: FC<TextRevealProps> = ({ children, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.9", "end 0.1"],
  })

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string")
  }

  const words = children.split(" ")

  return (
    <div ref={targetRef} className={cn("relative z-0", className)}>
      <div className="mx-auto flex max-w-5xl items-center bg-transparent px-6 py-24">
        <span className="flex flex-wrap text-2xl font-semibold text-black/15 md:text-3xl lg:text-4xl xl:text-5xl">
          {words.map((word, i) => {
            const start = i / words.length
            const end = start + 1 / words.length
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            )
          })}
        </span>
      </div>
    </div>
  )
}

interface WordProps {
  children: ReactNode
  progress: MotionValue<number>
  range: [number, number]
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1])
  return (
    <span className="relative mx-1">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity }} className="text-black">
        {children}
      </motion.span>
    </span>
  )
}
