import { Sparkles, Building2, Palette, Layers } from "lucide-react"

const services = [
  {
    icon: Sparkles,
    title: "Garage Epoxy",
    description:
      "Heavy-duty coatings engineered for the demands of daily garage use. Resistant to chemicals, tire marks, and impacts while delivering a showroom-quality shine.",
    features: ["Chemical resistant", "Anti-slip texture", "UV stable"],
  },
  {
    icon: Building2,
    title: "Commercial Epoxy",
    description:
      "Industrial-strength solutions for warehouses, showrooms, and retail spaces. Built to withstand high foot traffic and heavy machinery without compromising appearance.",
    features: ["High traffic rated", "Custom colors", "Fast cure"],
  },
  {
    icon: Palette,
    title: "Metallic Epoxy",
    description:
      "Stunning three-dimensional metallic finishes that create one-of-a-kind artistic floors. Each installation is a unique masterpiece with flowing, pearlescent patterns.",
    features: ["Unique patterns", "High gloss", "Seamless finish"],
  },
  {
    icon: Layers,
    title: "Flake Systems",
    description:
      "Decorative vinyl chip broadcast systems that combine beauty with durability. Multi-colored flakes hide imperfections while providing excellent texture and grip.",
    features: ["Texture options", "Hide cracks", "Color blends"],
  },
]

export function Services() {
  return (
    <section id="services" className="bg-secondary py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-24 mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-primary">
            What We Offer
          </p>
          <h2 className="font-display text-5xl font-bold uppercase tracking-tight text-foreground md:text-7xl lg:text-8xl">
            Our Services
          </h2>
          <p className="mt-8 text-xl md:text-2xl leading-relaxed text-muted-foreground">
            From residential garages to commercial facilities, we deliver flawless epoxy floor solutions tailored to your exact specifications.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-sm border border-border bg-card p-10 transition-all hover:border-primary/40 hover:shadow-[0_0_30px_rgba(37,99,235,0.1)]"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-sm bg-primary/10">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-foreground">
                {service.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-base text-muted-foreground"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
