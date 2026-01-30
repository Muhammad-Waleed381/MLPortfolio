import { BentoProjects } from "@/components/sections/bento-projects"
import { SystemsShowcase } from "@/components/sections/systems-showcase"
import { TracingBeam } from "@/components/ui/tracing-beam"
import { TextReveal } from "@/components/magicui/text-reveal"
import { BlurFade } from "@/components/magicui/blur-fade"
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight"
import { Spotlight } from "@/components/ui/spotlight"
import { FloatingNav } from "@/components/ui/floating-navbar"
import { SparklesCore } from "@/components/ui/sparkles"
import { MacbookScroll } from "../components/ui/macbook-scroll"
import { Timeline } from "@/components/ui/timeline"
import { FloatingDock } from "@/components/ui/floating-dock"
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconMapPin,
  IconFileText,
} from "@tabler/icons-react"


const navItems = [
  { name: "Projects", link: "#projects" },
  { name: "Systems", link: "#systems" },
  { name: "Cases", link: "#cases" },
  { name: "Contact", link: "#contact" },
];

const timelineData = [
  {
    title: "AutoLab Pipeline",
    content: (
      <div className="space-y-3" key="autolab">
        <h4 className="font-display text-xl font-semibold text-black">
          Data ingestion → LoRA fine-tuning → Diff-style output
        </h4>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-black/60">
          Automated lab report synthesis with tight feedback loops.
        </p>
      </div>
    ),
  },
  {
    title: "SafePath Architecture",
    content: (
      <div className="space-y-3" key="safepath">
        <h4 className="font-display text-xl font-semibold text-black">
          Feature store → XGBoost model → Route scoring
        </h4>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-black/60">
          Safety-first routing optimized for real-time constraints.
        </p>
      </div>
    ),
  },
  {
    title: "VibeVox Streaming",
    content: (
      <div className="space-y-3" key="vibevox">
        <h4 className="font-display text-xl font-semibold text-black">
          Audio capture → Embeddings → Real-time inference
        </h4>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-black/60">
          Low-latency audio pipeline with continuous inference.
        </p>
      </div>
    ),
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <FloatingNav navItems={navItems} />
      <section className="relative overflow-hidden pb-40 md:pb-56">
        <div className="absolute inset-0">
          <SparklesCore
            className="h-full w-full"
            background="#ffffff"
            particleColor="#000000"
            particleDensity={70}
            speed={2}
          />
        </div>
        <Spotlight className="-top-40 left-0" fill="black" />
        <MacbookScroll
          src="/me.jpg"
          title={
            <div className="space-y-6">
              <p className="font-mono text-xs uppercase tracking-[0.4em] text-black/60">
                Muhammad Waleed — ML Engineer
              </p>
              <h1 className="font-display text-4xl font-semibold text-black md:text-6xl">
                Intelligent systems, real-world ML impact.
              </h1>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-black/50">
                Building intelligent systems from the metal up to the model.
                Efficient ML solutions across SafePath, AutoLab, and VibeVox.
              </p>
            </div>
          }
        />
      </section>

      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-20">
        <section id="projects">
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
        </section>

        <BlurFade inView>
          <BentoProjects />
        </BlurFade>

        <BlurFade inView delay={0.12}>
          <div id="systems">
            <SystemsShowcase />
          </div>
        </BlurFade>

        <BlurFade inView delay={0.2}>
          <section className="glass-card overflow-hidden">
            <TextReveal>
              Systems built with discipline, data, and intent. From architecture to
              deployment, each model is engineered for real-world performance.
            </TextReveal>
          </section>
        </BlurFade>

        <BlurFade inView delay={0.3}>
          <section id="cases" className="pb-20">
            <Timeline data={timelineData} />
          </section>
        </BlurFade>
      </div>

      <footer id="contact" className="border-t border-black/10 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
            <div className="space-y-4">
              <h2 className="font-display text-3xl font-semibold text-black">
                Let&apos;s build the next intelligent system.
              </h2>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-black/50">
                Based in Pakistan · Open to ML systems work
              </p>
            </div>
            <div className="flex items-center justify-start md:justify-end">
              <FloatingDock
                items={[
                  { title: "GitHub", href: "https://github.com/Muhammad-Waleed381", icon: <IconBrandGithub /> },
                  {
                    title: "LinkedIn",
                    href: "https://www.linkedin.com/in/muhammad-waleed-a799581b5/",
                    icon: <IconBrandLinkedin />,
                  },
                  {
                    title: "Email",
                    href: "mailto:mwaleed.bscs23seecs@seecs.edu.pk",
                    icon: <IconMail />,
                  },
                  {
                    title: "Resume",
                    href: "/Resume.pdf",
                    icon: <IconFileText className="text-neutral-500 dark:text-neutral-300" />,
                  },
                  {
                    title: "Location",
                    href: "#",
                    icon: <IconMapPin className="text-neutral-500 dark:text-neutral-300" />,
                  },
                ]}
                desktopClassName="bg-white border border-black/10 shadow-[0_18px_40px_rgba(0,0,0,0.12)]"
                mobileClassName="bg-white"
              />
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
