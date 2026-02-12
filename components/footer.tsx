import Image from "next/image"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
          <div className="flex items-center">
            <div className="flex flex-col items-center leading-none">
              <Image
                src="/images/logo.png"
                alt="Elite"
                width={180}
                height={58}
                className="h-12 w-auto md:h-16 object-contain brightness-0 invert"
              />
              <span className="w-full text-center text-[10px] md:text-[12px] uppercase tracking-[0.4em] text-muted-foreground mt-2">
                Epoxy Floors
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs md:text-sm uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-foreground font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <p className="text-sm tracking-wide text-muted-foreground">
            &copy; {new Date().getFullYear()} Elite Epoxy Floors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
