"use client"

import { useState } from "react"
import { Send, Phone, Mail, MapPin } from "lucide-react"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      project: formData.get("project"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      setSubmitted(true)
    } catch (err) {
      setError("Something went wrong. Please try again or call us directly.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="bg-secondary py-32 md:py-48">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-20 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-primary">
            Get Started
          </p>
          <h2 className="font-display text-5xl font-bold uppercase tracking-tight text-foreground md:text-7xl lg:text-8xl">
            Request Free Estimate
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-xl md:text-2xl leading-relaxed text-muted-foreground">
            Ready to transform your floors? Fill out the form below and we&apos;ll get back to you within 24 hours.
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
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium uppercase tracking-widest text-muted-foreground"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="John Smith"
                    className="rounded-sm border border-border bg-background px-6 py-4 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium uppercase tracking-widest text-muted-foreground"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="(555) 123-4567"
                    className="rounded-sm border border-border bg-background px-6 py-4 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="email"
                  className="text-sm font-medium uppercase tracking-widest text-muted-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="rounded-sm border border-border bg-background px-6 py-4 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="project"
                  className="text-sm font-medium uppercase tracking-widest text-muted-foreground"
                >
                  Project Type
                </label>
                <select
                  id="project"
                  name="project"
                  required
                  defaultValue=""
                  className="rounded-sm border border-border bg-background px-6 py-4 text-base text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
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
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="message"
                  className="text-sm font-medium uppercase tracking-widest text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="resize-none rounded-sm border border-border bg-background px-6 py-4 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              {error && (
                <p className="text-sm text-destructive">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="mt-6 inline-flex items-center justify-center gap-3 rounded-sm bg-primary px-10 py-5 text-base font-semibold uppercase tracking-widest text-primary-foreground transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] disabled:opacity-70"
              >
                {loading ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Request Free Estimate
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
