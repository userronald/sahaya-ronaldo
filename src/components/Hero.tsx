import { useState } from "react";
import { ArrowDownRight, Download, MoveDownRight } from "lucide-react";
import { motion } from "motion/react";
import { resumeUrl } from "../data/portfolio";

const headlineLines = ["Building the Web.", "Engineering What", "Comes Next."];

const indicators = [
  { title: "4 years", detail: "Web development experience" },
  { title: "React & Next.js", detail: "Modern web development" },
  { title: "Full-stack", detail: "Application development" },
  { title: "AI-integrated", detail: "Web applications" },
];

export default function Hero() {
  const [photoAvailable, setPhotoAvailable] = useState(true);

  return (
    <section className="hero page-shell" id="top" aria-labelledby="hero-title">
      <div className="hero__topline">
        <span className="availability-chip"><i /> Available for full-time &amp; freelance opportunities</span>
        <span className="hero__location">Nagercoil, Tamil Nadu <span aria-hidden="true">/</span> India</span>
      </div>
      <div className="hero__main">
        <div className="hero__copy">
          <motion.p
            className="hero__intro"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="hero__intro-dot" /> WEB DEVELOPER <span className="hero__intro-divider">·</span> FULL-STACK ENGINEERING
          </motion.p>
          <h1 id="hero-title" aria-label="Building the Web. Engineering What Comes Next.">
            {headlineLines.map((line, index) => (
              <motion.span
                className={`hero__headline-line ${index === 2 ? "hero__headline-accent" : ""}`}
                key={line}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08 + index * 0.09, ease: [0.22, 1, 0.36, 1] }}
              >
                {line}
              </motion.span>
            ))}
          </h1>
          <p className="hero__signature">Sahaya Ronaldo S. <span>/</span> Web Developer</p>
          <p className="hero__position">
                From interfaces to intelligent applications, I build digital products that solve practical
                problems. I&apos;m a Web Developer with approximately 4 years of experience building
                responsive web applications, interactive user experiences, business websites, and
                AI-powered solutions. My work combines frontend engineering, backend integrations,
                performance optimization, and practical problem-solving.
              </p>
              <div className="hero-indicators" aria-label="Professional indicators">
                {indicators.map((indicator, index) => (
                  <div className="hero-indicator" key={indicator.title}>
                    <span className="hero-indicator__index">0{index + 1}</span>
                    <div>
                      <strong>{indicator.title}</strong>
                      <span>{indicator.detail}</span>
                    </div>
                  </div>
                ))}
          </div>
              <div className="hero__actions">
                <a className="button button--dark" href="#work">
                  Explore My Projects <ArrowDownRight size={16} aria-hidden="true" />
                </a>
                <a className="button button--outline" href={resumeUrl} target="_blank" rel="noopener noreferrer">
                  Download Resume <Download size={15} aria-hidden="true" />
                </a>
              </div>
              <p className="hero__availability"><i /> Open to Full-Time Roles &amp; Freelance Projects</p>
        </div>
        <motion.div
          className="hero__portrait-wrap"
          initial={{ opacity: 0, y: 20, rotate: 1.5 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="portrait-backdrop" aria-hidden="true" />
          <div className="hero__portrait">
            {photoAvailable ? (
              <img
                src="/images/profile.jpeg"
                alt="Portrait of Sahaya Ronaldo S."
                fetchPriority="high"
                decoding="async"
                onError={() => setPhotoAvailable(false)}
              />
            ) : (
              <div className="portrait-fallback" aria-label="Sahaya Ronaldo S.">
                <span>SR</span>
                <small>Web Developer<br />Nagercoil, India</small>
              </div>
            )}
          </div>
          <span className="portrait-note"><i /> Digital craftsman / 01</span>
          <span className="portrait-coordinate" aria-hidden="true">08°10&apos;N — 77°26&apos;E</span>
          <span className="portrait-index" aria-hidden="true">S. R.</span>
          <span className="tech-label tech-label--top">React.js <i /></span>
          <span className="tech-label tech-label--side"><i /> TypeScript</span>
          <span className="tech-label tech-label--bottom">Node.js / AI</span>
        </motion.div>
      </div>
      <div className="hero__foot">
        <span>Thoughtful interfaces. Useful software.</span>
        <a href="#about" aria-label="Scroll to professional profile">
          Discover the approach <MoveDownRight size={14} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
