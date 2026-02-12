import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex flex-col leading-none">
              <Image
                src="/images/logo.png"
                alt="Elite"
                width={100}
                height={32}
                className="h-6 w-auto object-contain brightness-0 invert"
              />
              <span className="text-[8px] uppercase tracking-[0.3em] text-muted-foreground">
                Epoxy Floors
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="#services"
              className="text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
            >
              Services
            </a>
            <a
              href="#gallery"
              className="text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
            >
              Gallery
            </a>
            <a
              href="#process"
              className="text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
            >
              Process
            </a>
            <a
              href="#reviews"
              className="text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
            >
              Reviews
            </a>
            <a
              href="#contact"
              className="text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact
            </a>
          </div>

          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Elite Epoxy Floors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
