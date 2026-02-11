import { Star } from "lucide-react"

const reviews = [
  {
    name: "James R.",
    location: "Garage Floor - 3-Car",
    quote:
      "Absolutely blown away by the transformation. My garage looks like a luxury showroom. The metallic epoxy has an incredible depth to it that photos don't do justice.",
    rating: 5,
  },
  {
    name: "Sarah M.",
    location: "Basement Floor",
    quote:
      "We turned our unfinished basement into a beautiful entertainment space. The team was professional, clean, and finished ahead of schedule. Couldn't be happier.",
    rating: 5,
  },
  {
    name: "David L.",
    location: "Garage Floor - 2-Car",
    quote:
      "Three years in and the floor still looks brand new. Oil drips, dropped tools, road salt - nothing has damaged it. Best home investment I've made.",
    rating: 5,
  },
  {
    name: "Michelle K.",
    location: "Basement Gym Floor",
    quote:
      "The anti-slip finish is perfect for my home gym. Dropped weights haven't left a mark. The charcoal color hides everything and the gloss is stunning.",
    rating: 5,
  },
  {
    name: "Robert T.",
    location: "Garage Floor - 2-Car",
    quote:
      "From the initial estimate to the final walkthrough, every step was handled professionally. The flake system they recommended was the perfect choice for our garage.",
    rating: 5,
  },
  {
    name: "Karen W.",
    location: "Basement Living Area",
    quote:
      "Our basement had moisture issues and they solved everything. The epoxy sealed the floor beautifully and the metallic blue finish gets compliments from everyone who visits.",
    rating: 5,
  },
]

export function Reviews() {
  return (
    <section id="reviews" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">
            Testimonials
          </p>
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Don&apos;t just take our word for it. Here&apos;s what homeowners have to say
            about their transformed floors.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-sm border border-border bg-card p-8 transition-all hover:border-primary/30"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={`star-${review.name}-${i}`}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <blockquote className="text-sm leading-relaxed text-muted-foreground">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <div className="mt-6 border-t border-border pt-4">
                <p className="font-display text-sm font-bold uppercase tracking-wide text-foreground">
                  {review.name}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {review.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
