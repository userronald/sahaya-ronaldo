import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#work" },
  { label: "Client work", href: "#client-projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuToggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let frame = 0;
    const updateActiveSection = () => {
      const activeLink = links
        .map((link) => ({
          href: link.href,
          top: document.querySelector<HTMLElement>(link.href)?.getBoundingClientRect().top,
        }))
        .filter((link): link is { href: string; top: number } => link.top !== undefined && link.top <= 120)
        .sort((a, b) => b.top - a.top)[0];

      setActiveSection(activeLink?.href ?? "");
    };
    const scheduleUpdate = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActiveSection);
    };

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    updateActiveSection();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuToggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Sahaya Ronaldo, home">
        SR<span>.</span>
      </a>
      <nav id="primary-navigation" className={`main-nav ${menuOpen ? "main-nav--open" : ""}`} aria-label="Main navigation">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={activeSection === link.href ? "is-current" : ""}
            aria-current={activeSection === link.href ? "location" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a className="nav-mobile-cta" href="#contact" onClick={() => setMenuOpen(false)}>
          Start a conversation <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </nav>
      <div className="header-actions">
        <a className="header-availability" href="#availability"><i /> Available</a>
        <a className="header-cta" href="#contact">
          Let&apos;s talk <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
      <button
        ref={menuToggleRef}
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
      </button>
    </header>
  );
}
