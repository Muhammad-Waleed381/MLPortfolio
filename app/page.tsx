export default function Home() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <section className="paper-card p-8">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-black tracking-[0.2em]">FATBOY</span>
              <span className="text-xs font-semibold uppercase">ML Engineer</span>
            </div>
            <h1 className="text-5xl font-black leading-tight">
              Paperfolio
              <span className="block text-xl font-semibold">
                High-contrast ML portfolio, powered by MCP components.
              </span>
            </h1>
            <div className="flex flex-wrap gap-4">
              <button className="paper-card px-5 py-2 text-sm font-bold uppercase">
                Contact
              </button>
              <button className="paper-card px-5 py-2 text-sm font-bold uppercase">
                View Projects
              </button>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-12">
          <div className="paper-card md:col-span-7 p-6">
            <h2 className="text-2xl font-black">AutoLab</h2>
            <p className="mt-2 text-sm">
              Lab report automation with Mistral fine-tuning and LoRA/QLoRA.
            </p>
          </div>
          <div className="paper-card md:col-span-5 p-6">
            <h2 className="text-2xl font-black">SafePath</h2>
            <p className="mt-2 text-sm">
              Urban safety routing with a pivot from GNNs to XGBoost.
            </p>
          </div>
          <div className="paper-card md:col-span-4 p-6">
            <h2 className="text-2xl font-black">VibeVox</h2>
            <p className="mt-2 text-sm">
              Real-time audio processing with chunky visualizers.
            </p>
          </div>
          <div className="paper-card md:col-span-8 p-6">
            <h2 className="text-2xl font-black">Metal-to-Model Orbit</h2>
            <p className="mt-2 text-sm">
              RISC-V and Assembly at the core, Python and ML frameworks on the edge.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
