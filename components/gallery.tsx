"use client"

import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"

const projects = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Metallic silver and charcoal epoxy coating in a residential garage",
    label: "Garage Floor",
    type: "Metallic Epoxy",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Blue metallic epoxy floor in a modern basement entertainment room",
    label: "Basement Floor",
    type: "Metallic Epoxy",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Decorative vinyl chip flake epoxy floor in a two-car garage",
    label: "Garage Floor",
    type: "Flake System",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Charcoal black solid epoxy floor coating in a basement gym",
    label: "Basement Floor",
    type: "Solid Epoxy",
  },
  {
    src: "/images/gallery-5.jpg",
    alt: "Pearl white and silver metallic epoxy in a luxury three-car garage",
    label: "Garage Floor",
    type: "Metallic Epoxy",
  },
  {
    src: "/images/gallery-6.jpg",
    alt: "Deep blue and silver swirl metallic epoxy in a basement living space",
    label: "Basement Floor",
    type: "Metallic Epoxy",
  },
]

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <section id="gallery" className="bg-background py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-24 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-primary">
            Our Portfolio
          </p>
          <h2 className="font-display text-5xl font-bold uppercase tracking-tight text-foreground md:text-7xl lg:text-8xl">
            Recent Projects
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg md:text-xl leading-relaxed text-muted-foreground">
            Every floor we coat is a testament to precision craftsmanship. Browse our latest garage and basement transformations.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <button
              key={project.src}
              type="button"
              onClick={() => setSelected(i)}
              className="group relative aspect-[4/3] overflow-hidden rounded-sm"
            >
              <Image
                src={project.src || "/placeholder.svg"}
                alt={project.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="mb-1 block text-xs uppercase tracking-[0.2em] text-primary">
                  {project.type}
                </span>
                <span className="block font-display text-lg font-bold uppercase text-foreground">
                  {project.label}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
          onKeyDown={(e) => e.key === "Escape" && setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={projects[selected].alt}
        >
          <button
            type="button"
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 text-foreground hover:text-primary"
            aria-label="Close image"
          >
            <X className="h-8 w-8" />
          </button>
          <div className="relative aspect-video w-full max-w-5xl overflow-hidden rounded-sm">
            <Image
              src={projects[selected].src || "/placeholder.svg"}
              alt={projects[selected].alt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}
