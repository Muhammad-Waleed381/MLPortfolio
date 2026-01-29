"use client"

import { useRef } from "react"

import { AnimatedBeam } from "@/components/magicui/animated-beam"
import { OrbitingCircles } from "@/components/magicui/orbiting-circles"

export function SystemsShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)

  return (
    <section className="mt-12" ref={containerRef}>
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-3xl font-semibold text-black">
            Metal-to-Model Orbit
          </h2>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-black/60">
            Skills
          </span>
        </div>

        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center">
          <div
            ref={leftRef}
            className="flex h-24 w-full items-center justify-center rounded-3xl border border-black/10 bg-white/80 font-mono text-xs uppercase tracking-[0.2em] text-black/70 lg:w-52"
          >
            Low-level Core
          </div>

          <div className="relative flex h-64 flex-1 items-center justify-center md:h-72">
            <div className="absolute inset-0">
              <OrbitingCircles
                radius={64}
                iconSize={32}
                speed={1.2}
                className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:[--radius:80] md:[--icon-size:40px]"
              >
                <span className="flex size-10 items-center justify-center rounded-full border border-black/30 bg-white font-mono text-[10px] uppercase tracking-[0.2em] text-black">
                  C
                </span>
                <span className="flex size-10 items-center justify-center rounded-full border border-black/30 bg-white font-mono text-[10px] uppercase tracking-[0.2em] text-black">
                  ASM
                </span>
                <span className="flex size-10 items-center justify-center rounded-full border border-black/30 bg-white font-mono text-[10px] uppercase tracking-[0.2em] text-black">
                  RISC-V
                </span>
              </OrbitingCircles>
              <OrbitingCircles
                radius={110}
                iconSize={36}
                speed={0.9}
                className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:[--radius:140] md:[--icon-size:44px]"
              >
                <span className="flex size-11 items-center justify-center rounded-full border border-black/20 bg-white font-mono text-[10px] uppercase tracking-[0.2em] text-black">
                  CUDA
                </span>
                <span className="flex size-11 items-center justify-center rounded-full border border-black/20 bg-white font-mono text-[10px] uppercase tracking-[0.2em] text-black">
                  Rust
                </span>
                <span className="flex size-11 items-center justify-center rounded-full border border-black/20 bg-white font-mono text-[10px] uppercase tracking-[0.2em] text-black">
                  Linux
                </span>
              </OrbitingCircles>
              <OrbitingCircles
                radius={150}
                iconSize={38}
                speed={0.8}
                className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:[--radius:190] md:[--icon-size:46px]"
              >
                <span className="flex size-12 items-center justify-center rounded-full border border-black/15 bg-white font-mono text-[10px] uppercase tracking-[0.2em] text-black">
                  Py
                </span>
                <span className="flex size-12 items-center justify-center rounded-full border border-black/15 bg-white font-mono text-[10px] uppercase tracking-[0.2em] text-black">
                  Torch
                </span>
                <span className="flex size-12 items-center justify-center rounded-full border border-black/15 bg-white font-mono text-[10px] uppercase tracking-[0.2em] text-black">
                  LLMs
                </span>
              </OrbitingCircles>
            </div>
          </div>

          <div
            ref={rightRef}
            className="flex h-24 w-full items-center justify-center rounded-3xl border border-black/10 bg-white/80 font-mono text-xs uppercase tracking-[0.2em] text-black/70 lg:w-52"
          >
            Model Stack
          </div>

          <AnimatedBeam
            containerRef={containerRef}
            fromRef={leftRef}
            toRef={rightRef}
            curvature={-40}
            pathColor="#000000"
            pathWidth={1.2}
            pathOpacity={0.2}
            gradientStartColor="#000000"
            gradientStopColor="#bdbdbd"
          />
        </div>
      </div>
    </section>
  )
}
