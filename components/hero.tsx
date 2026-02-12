import Image from "next/image"
import { ArrowRight, Shield, Clock, Award } from "lucide-react"

const stats = [
  { icon: Shield, label: "Year Warranty", value: "15" },
  { icon: Clock, label: "Day Cure Time", value: "1" },
  { icon: Award, label: "5-Star Reviews", value: "100+" },
]

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-x-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-floor.jpg"
          alt="Stunning glossy epoxy garage floor with metallic blue and charcoal swirl patterns"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-24 pb-16 text-center">
        <div className="flex flex-col items-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-sm border border-border bg-secondary/60 px-4 py-2 text-xs uppercase tracking-[0.2em] text-muted-foreground backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Premium Epoxy Floor Coatings
          </div>

          <h1 className="font-display text-5xl font-bold uppercase leading-none tracking-tight text-foreground sm:text-7xl md:text-8xl lg:text-9xl">
            <span className="text-balance">Floors That</span>
            <br />
            <span className="text-primary">Command</span>
            <br />
            <span className="text-balance">Attention</span>
          </h1>

          <p className="mt-8 max-w-2xl text-center text-xl leading-relaxed text-muted-foreground md:text-2xl">
            Transform your garage or basement with industrial-grade epoxy coatings.
            Mirror-like finishes engineered to withstand decades of heavy use.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-8 py-4 text-base font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]"
            >
              Get Your Free Estimate
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-border bg-secondary/50 px-8 py-4 text-base font-semibold uppercase tracking-wider text-foreground transition-all hover:bg-secondary"
            >
              View Our Work
            </a>
          </div>
        </div>

        <div className="mt-24 grid w-full max-w-6xl grid-cols-1 gap-16 sm:grid-cols-3 md:mt-32">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="mx-auto mb-6 h-12 w-12 text-primary" />
              <div className="font-display text-6xl font-bold text-foreground md:text-8xl">
                {stat.value}
              </div>
              <div className="mt-3 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
