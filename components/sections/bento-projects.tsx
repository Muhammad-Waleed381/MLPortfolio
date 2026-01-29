import { BlurFade } from "@/components/magicui/blur-fade";
import { SparklesCore } from "@/components/ui/sparkles";
import { WobbleCard } from "@/components/ui/wobble-card";

const items = [
  {
    title: "AutoLab",
    description: "Mistral fine-tuning + LoRA/QLoRA for lab report automation.",
    link: "#autolab",
  },
  {
    title: "SafePath",
    description: "Urban safety routing with GNN → XGBoost pivot.",
    link: "#safepath",
  },
  {
    title: "VibeVox",
    description: "Real-time audio inference with chunky visualizers.",
    link: "#vibevox",
  },
];

export function BentoProjects() {
  return (
    <section className="mt-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {items.map((item, index) => (
          <BlurFade key={item.title} delay={index * 0.08} inView>
            <a href={item.link} className="block h-full">
              <WobbleCard containerClassName="h-full">
                <div className="relative h-full space-y-4">
                  <div className="absolute inset-0">
                    <SparklesCore
                      className="h-full w-full"
                      background="transparent"
                      particleColor="#000000"
                      particleDensity={60}
                      speed={1.6}
                    />
                  </div>
                  <div className="relative z-10 space-y-4">
                    <h3 className="font-display text-2xl font-semibold text-black">
                      {item.title}
                    </h3>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-black/60">
                      {item.description}
                    </p>
                  </div>
                </div>
              </WobbleCard>
            </a>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
