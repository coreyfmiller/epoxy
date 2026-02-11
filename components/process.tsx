import { ClipboardCheck, Hammer, Paintbrush, ThumbsUp } from "lucide-react"

const steps = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Consultation",
    description:
      "We assess your space, discuss your vision, and provide a detailed, no-obligation quote tailored to your project.",
  },
  {
    icon: Hammer,
    step: "02",
    title: "Surface Prep",
    description:
      "Our team diamond-grinds and profiles the concrete to ensure a flawless bond. Cracks and imperfections are repaired.",
  },
  {
    icon: Paintbrush,
    step: "03",
    title: "Coating Application",
    description:
      "We apply multiple layers of premium epoxy and topcoat, creating a durable, high-gloss finish that will last for years.",
  },
  {
    icon: ThumbsUp,
    step: "04",
    title: "Final Walkthrough",
    description:
      "After curing, we inspect every detail with you to ensure perfection. Your floor is ready to perform from day one.",
  },
]

export function Process() {
  return (
    <section id="process" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">
            How It Works
          </p>
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Our Process
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
            From initial consultation to final walkthrough, we handle every step
            with precision and care.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.step} className="relative">
              {i < steps.length - 1 && (
                <div className="absolute top-10 left-[calc(50%+40px)] hidden h-px w-[calc(100%-80px)] bg-border lg:block" />
              )}
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary/30 bg-card">
                  <step.icon className="h-8 w-8 text-primary" />
                  <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary font-display text-xs font-bold text-primary-foreground">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold uppercase tracking-wide text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
