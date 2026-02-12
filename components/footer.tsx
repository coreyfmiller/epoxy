export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-primary">
              <span className="font-display text-sm font-bold text-primary-foreground">E</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
                Elite
              </span>
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
