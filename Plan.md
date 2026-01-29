# Plan.md: MCP-Driven "Paperfolio" ML Portfolio

## 1. Project Vision
Build a high-performance, visually striking personal portfolio for **Muhammad Waleed**, an ML Engineer. The aesthetic is **"Paperfolio"**: a high-contrast, Neobrutalist, tactile scrapbook style that feels like physical paper and ink, powered by modern motion and component systems.

* **Primary Palette:** Manila Paper (`#F4F1EA`), Ink Black (`#000000`), Pure White (`#FFFFFF`).
* **Accent Colors:** Electric Blue (`#2563EB`) and Safety Orange (`#FF2E63`).
* **Core UI Principles:** 0px corners, 2px-4px borders, hard shadows, heavy typography.

## 2. Tech Stack
* **Framework:** Next.js (App Router), TypeScript.
* **Styling:** Tailwind CSS + Framer Motion.
* **Component Sources (via MCP):**
  * **shadcn/ui:** Base primitives, with forced 0px radius + thick borders.
  * **Magic UI:** Orbiting Circles (Tech Stack) and Animated Beams (ML pipelines).
  * **Aceternity UI:** Bento Grid (Project Showcase) and Tracing Beam (Case Studies).

## 3. Key Content & Features
### A. The "Big Three" ML Showcases
* **AutoLab (Mistral-for-Diction):**
  * *Visual:* Split-screen "Diff" view for lab report automation.
  * *Highlight:* Unsloth fine-tuning, LoRA/QLoRA.
* **SafePath (Urban Safety):**
  * *Visual:* High-contrast map with neon routing line.
  * *Highlight:* Pivot from GNNs to XGBoost for optimization.
* **VibeVox:**
  * *Visual:* Chunky bar-style audio visualizer.
  * *Highlight:* Real-time audio processing/ML inference.

### B. Interactive Components
* **Metal-to-Model Orbit:** Magic UI Orbiting Circles showing skill progression from RISC-V/Assembly (inner) to Python/ML frameworks (outer).
* **Paper-Lift Interaction:** Framer Motion hover state to lift cards with stronger shadow + Y-translation.

## 4. Implementation Steps (Phases)
### Phase 1: Foundation & Theme
1. Initialize Next.js with Tailwind.
2. Configure `globals.css` with Paperfolio palette variables.
3. Override shadcn components to 0px radius and 2px borders.

### Phase 2: Layout & Hero
1. Implement Bento Grid layout as the main page driver.
2. Create a Hero section with high-contrast typography and magnetic CTA.

### Phase 3: Project Deep-Dives
1. Build Paper-Card components for AutoLab, SafePath, and VibeVox.
2. Integrate Animated Beams to illustrate data flow.

### Phase 4: Polish & Texture
1. Add a subtle SVG grain overlay to simulate paper texture.
2. Implement a highlighter hover effect for links.

## 5. Instructions for the AI Agent
* **Constraint:** No gradients or soft blurs unless explicitly requested.
* **Constraint:** Ensure all components are responsive; watch margins on small screens.
* **Refinement Task:** For Orbiting Circles, show transition from low-level C/Assembly to high-level Python/ML frameworks by increasing orbit radius, icon abstraction, and label hierarchy from inner to outer rings.
