import { Star } from "lucide-react"

const reviews = [
  {
    name: "James & Sarah Richardson",
    location: "Garage & Basement Transformation",
    quote:
      "Absolutely blown away by the transformation. Our garage looks like a luxury showroom and the basement is finally a space we enjoy. The metallic epoxy has an incredible depth to it.",
    rating: 5,
  },
  {
    name: "Sarah Miller",
    location: "Basement Floor",
    quote:
      "We turned our unfinished basement into a beautiful entertainment space. The team was professional, clean, and finished ahead of schedule. Couldn't be happier.",
    rating: 5,
  },
  {
    name: "David Lawson",
    location: "Garage Floor - 2-Car",
    quote:
      "Three years in and the floor still looks brand new. Oil drips, dropped tools, road salt - nothing has damaged it. Best home investment I've made.",
    rating: 5,
  },
  {
    name: "Michelle & Kevin Kennedy",
    location: "Basement Gym Floor",
    quote:
      "The anti-slip finish is perfect for our home gym. Dropped weights haven't left a mark. The charcoal color hides everything and the gloss is stunning. We love how it turned out.",
    rating: 5,
  },
  {
    name: "Robert Thompson",
    location: "Garage Floor - 2-Car",
    quote:
      "From the initial estimate to the final walkthrough, every step was handled professionally. The flake system they recommended was the perfect choice for our garage.",
    rating: 5,
  },
  {
    name: "Karen & Michael Williams",
    location: "Basement Living Area",
    quote:
      "Our basement had moisture issues and they solved everything. The epoxy sealed the floor beautifully and the metallic blue finish gets compliments from everyone who visits our home.",
    rating: 5,
  },
]

export function Reviews() {
  return (
    <section id="reviews" className="bg-background py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-24 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-primary">
            Testimonials
          </p>
          <h2 className="font-display text-5xl font-bold uppercase tracking-tight text-foreground md:text-7xl lg:text-8xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-xl md:text-2xl leading-relaxed text-muted-foreground">
            Don&apos;t just take our word for it. Here&apos;s what homeowners have to say
            about their transformed floors.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-sm border border-border bg-card p-10 transition-all hover:border-primary/30"
            >
              <div className="mb-6 flex gap-1.5">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={`star-${review.name}-${i}`}
                    className="h-5 w-5 fill-primary text-primary"
                  />
                ))}
              </div>
              <blockquote className="text-lg md:text-xl leading-relaxed text-muted-foreground italic">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <div className="mt-6 border-t border-border pt-4">
                <p className="font-display text-base font-bold uppercase tracking-wide text-foreground">
                  {review.name}
                </p>
                <p className="mt-1 text-sm uppercase tracking-wider text-muted-foreground">
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
