import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const services = [
  {
    title: "Full-Stack Web Development",
    description:
      "Building modern, scalable web applications using React, Next.js, Node.js, Express, databases, and APIs.",
  },
  {
    title: "Frontend Development",
    description:
      "Responsive, interactive, performance-focused frontend experiences using React, Next.js, TypeScript, and modern UI frameworks.",
  },
  {
    title: "AI-Powered Applications",
    description: "Integrating AI APIs and intelligent functionality into modern web applications.",
  },
  {
    title: "Business Website Development",
    description: "Corporate websites, business platforms, landing pages, and custom digital experiences.",
  },
  {
    title: "CMS & WordPress Development",
    description: "WordPress websites, custom themes, plugins, content management, maintenance, and optimization.",
  },
  {
    title: "Website Optimization & Technical SEO",
    description:
      "Performance improvements, Core Web Vitals, Lighthouse, technical SEO, and responsive optimization.",
  },
  {
    title: "API & Backend Integration",
    description: "REST APIs, authentication, backend connectivity, database integration, and third-party services.",
  },
];

export default function Services() {
  return (
    <section className="services-section section-shell" id="services" aria-labelledby="services-title">
      <SectionHeading
        index="08"
        eyebrow="Services & collaboration"
        title="From Ideas to Working Digital Products."
        description="Practical development support for products, businesses, and teams—from frontend experiences to connected applications."
        id="services-title"
      />
      <div className="services-list" aria-label="Development services">
        {services.map((service, index) => (
          <article className="service-row" key={service.title}>
            <span className="service-row__index">{String(index + 1).padStart(2, "0")}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ArrowUpRight className="service-row__arrow" size={16} aria-hidden="true" />
          </article>
        ))}
      </div>
      <div className="collaboration-options" id="availability">
        <article className="collaboration-option">
          <span className="collaboration-option__eyebrow"><i /> FULL-TIME OPPORTUNITIES</span>
          <h3>Build with a team.</h3>
          <p>Open to Web Developer, React Developer, Full-Stack Developer, and Software Developer positions.</p>
        </article>
        <article className="collaboration-option collaboration-option--freelance">
          <span className="collaboration-option__eyebrow"><i /> FREELANCE COLLABORATIONS</span>
          <h3>Make an idea useful.</h3>
          <p>Available for website development, web applications, CMS solutions, and business-specific development projects.</p>
        </article>
      </div>
      <div className="services-cta">
        <div>
          <span className="eyebrow">Have a project in mind?</span>
          <h3>Have a Project in Mind? <em>Let&apos;s Build It.</em></h3>
        </div>
        <a className="button button--dark" href="#contact">
          Start a conversation <ArrowDownRight size={16} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
