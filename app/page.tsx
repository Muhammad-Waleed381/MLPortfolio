import { BentoProjects } from "@/components/sections/bento-projects"
import { SystemsShowcase } from "@/components/sections/systems-showcase"
import { TracingBeam } from "@/components/ui/tracing-beam"
import { TextReveal } from "@/components/magicui/text-reveal"
import { BlurFade } from "@/components/magicui/blur-fade"
import { HeroParallax } from "@/components/ui/hero-parallax"
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight"
import { Spotlight } from "@/components/ui/spotlight"
import { ParallaxScroll } from "@/components/ui/parallax-scroll"

const parallaxProjects = [
  {
    title: "AutoLab",
    link: "#autolab",
    thumbnail:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "SafePath",
    link: "#safepath",
    thumbnail:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "VibeVox",
    link: "#vibevox",
    thumbnail:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Data Systems",
    link: "#systems",
    thumbnail:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Realtime",
    link: "#realtime",
    thumbnail:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "MLOps",
    link: "#mlops",
    thumbnail:
      "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Pipelines",
    link: "#pipelines",
    thumbnail:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Inference",
    link: "#inference",
    thumbnail:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Edges",
    link: "#edges",
    thumbnail:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Evaluation",
    link: "#evaluation",
    thumbnail:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Training",
    link: "#training",
    thumbnail:
      "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "R&D",
    link: "#rnd",
    thumbnail:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Research",
    link: "#research",
    thumbnail:
      "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Tooling",
    link: "#tooling",
    thumbnail:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Foundations",
    link: "#foundations",
    thumbnail:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
  },
]

const parallaxTiles = [
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="relative overflow-hidden">
        <Spotlight className="-top-40 left-0" fill="black" />
        <HeroParallax
          title="Monochrome systems, parallax motion."
          subtitle="ML pipelines, real-time inference, and engineering clarity."
          products={parallaxProjects}
        />
      </section>

      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-20">
        <HeroHighlight containerClassName="rounded-3xl border border-black/10 px-10 py-16">
          <div className="max-w-3xl space-y-6">
            <h2 className="font-display text-3xl font-semibold text-black md:text-4xl">
              Building systems with <Highlight>clarity</Highlight> and motion.
            </h2>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-black/60">
              From low-level compute to production-grade ML pipelines.
            </p>
          </div>
        </HeroHighlight>

        <BlurFade inView>
          <BentoProjects />
        </BlurFade>

        <BlurFade inView delay={0.08}>
          <section className="glass-card overflow-hidden">
            <ParallaxScroll images={parallaxTiles} />
          </section>
        </BlurFade>

        <BlurFade inView delay={0.12}>
          <SystemsShowcase />
        </BlurFade>

        <BlurFade inView delay={0.2}>
          <section className="glass-card overflow-hidden">
            <TextReveal>
              Every system is a trace of decisions, data, and motion. The portfolio
              moves like the models: fluid, fast, and minimal.
            </TextReveal>
          </section>
        </BlurFade>

        <BlurFade inView delay={0.3}>
          <section>
            <TracingBeam className="glass-card px-8 py-10">
              <div className="space-y-6">
                <div>
                  <h2 className="font-display text-3xl font-semibold">
                    Case Studies
                  </h2>
                  <p className="mt-2 font-mono text-xs uppercase tracking-[0.3em] text-black/50">
                    Follow the beam through each system decision.
                  </p>
                </div>
                <div className="glass-card p-5">
                  <h3 className="font-display text-xl font-semibold">
                    AutoLab Pipeline
                  </h3>
                  <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-black/60">
                    Data ingestion → LoRA fine-tuning → Diff-style output
                  </p>
                </div>
                <div className="glass-card p-5">
                  <h3 className="font-display text-xl font-semibold">
                    SafePath Architecture
                  </h3>
                  <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-black/60">
                    Feature store → XGBoost model → Route scoring
                  </p>
                </div>
                <div className="glass-card p-5">
                  <h3 className="font-display text-xl font-semibold">
                    VibeVox Streaming
                  </h3>
                  <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-black/60">
                    Audio capture → Embeddings → Real-time inference
                  </p>
                </div>
              </div>
            </TracingBeam>
          </section>
        </BlurFade>
      </div>
    </main>
  );
}
