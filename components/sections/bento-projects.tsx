import { IconBolt, IconRoute, IconWaveSine } from "@tabler/icons-react";

import { BlurFade } from "@/components/magicui/blur-fade";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

const items = [
  {
    title: "AutoLab",
    description: "Mistral fine-tuning + LoRA/QLoRA for lab report automation.",
    icon: <IconBolt className="size-6" />,
    className: "md:col-span-2",
  },
  {
    title: "SafePath",
    description: "Urban safety routing with GNN → XGBoost pivot.",
    icon: <IconRoute className="size-6" />,
  },
  {
    title: "VibeVox",
    description: "Real-time audio inference with chunky visualizers.",
    icon: <IconWaveSine className="size-6" />,
  },
  {
    title: "System Design",
    description: "Animated beams showing model data flow.",
    icon: <IconBolt className="size-6" />,
    className: "md:col-span-2",
  },
];

export function BentoProjects() {
  return (
    <section className="mt-12">
      <BentoGrid className="gap-6">
        {items.map((item, index) => (
          <BlurFade key={item.title} delay={index * 0.08} inView>
            <BentoGridItem
              title={item.title}
              description={item.description}
              icon={item.icon}
              className={item.className}
            />
          </BlurFade>
        ))}
      </BentoGrid>
    </section>
  );
}
