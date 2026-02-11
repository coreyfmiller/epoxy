"use client"

import { useState } from "react"
import { Send, Phone, Mail, MapPin } from "lucide-react"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Free Estimate
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-muted-foreground">
            Ready to transform your floors? Fill out the form and we&apos;ll get
            back to you within 24 hours with a detailed quote.
          </p>
        </div>

        <div className="rounded-sm border border-border bg-card p-8 md:p-12">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center py-12 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Send className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold uppercase text-foreground">
                Message Sent
              </h3>
              <p className="mt-2 text-muted-foreground">
                We&apos;ll be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
              className="flex flex-col gap-6"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-xs uppercase tracking-wider text-muted-foreground"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="John Smith"
                    className="rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="phone"
                    className="text-xs uppercase tracking-wider text-muted-foreground"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="(555) 123-4567"
                    className="rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-xs uppercase tracking-wider text-muted-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="project"
                  className="text-xs uppercase tracking-wider text-muted-foreground"
                >
                  Project Type
                </label>
                <select
                  id="project"
                  required
                  defaultValue=""
                  className="rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="" disabled>
                    Select a service...
                  </option>
                  <option value="garage">Garage Epoxy</option>
                  <option value="basement">Basement Epoxy</option>
                  <option value="commercial">Commercial Epoxy</option>
                  <option value="metallic">Metallic Epoxy</option>
                  <option value="flake">Flake System</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-xs uppercase tracking-wider text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="resize-none rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]"
              >
                <Send className="h-4 w-4" />
                Request Free Estimate
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
