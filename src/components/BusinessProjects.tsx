import { useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { projects, type Project } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

const businessProjectOrder = ["logistics", "research", "hfs"] as const;
const businessProjects = businessProjectOrder
  .map((visual) => projects.find((project) => project.visual === visual))
  .filter((project): project is Project => project !== undefined);

const projectCategories: Record<string, string> = {
  logistics: "LOGISTICS & TRANSPORT",
  research: "RESEARCH & EDUCATION",
  hfs: "FINANCIAL SERVICES",
};

function BusinessProjectCard({ project, index }: { project: Project; index: number }) {
  const [imageAvailable, setImageAvailable] = useState(Boolean(project.image));
  const imagePosition = project.visual === "logistics" ? "center 30%" : "center top";

  return (
    <motion.article
      className={`business-project-card business-project-card--${project.visual}`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      <a
        className="business-project-card__link"
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${project.name} website (opens in a new tab)`}
      >
        <div className="business-browser">
          <div className="business-browser__chrome">
            <span className="business-browser__controls"><i /><i /><i /></span>
            <span className="business-browser__address">{new URL(project.url).hostname}</span>
            <ExternalLink size={12} aria-hidden="true" />
          </div>
          <div className="business-browser__viewport">
            {imageAvailable && project.image ? (
              <img
                src={project.image}
                alt={`${project.name} website preview`}
                loading="lazy"
                decoding="async"
                style={{ objectPosition: imagePosition }}
                onError={() => setImageAvailable(false)}
              />
            ) : (
              <div className={`business-preview-fallback business-preview-fallback--${project.visual}`}>
                <span>{projectCategories[project.visual]}</span>
                <strong>{project.name}</strong>
                <i />
                <small>{new URL(project.url).hostname}</small>
              </div>
            )}
            <span className="business-browser__open">Visit website <ArrowUpRight size={14} aria-hidden="true" /></span>
          </div>
        </div>
        <div className="business-project-card__meta">
          <span>{project.number} / {projectCategories[project.visual]}</span>
          <ArrowUpRight size={15} aria-hidden="true" />
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </a>
    </motion.article>
  );
}

export default function BusinessProjects() {
  return (
    <section
      className="business-projects-section section-shell"
      id="client-projects"
      aria-labelledby="client-projects-heading"
    >
      <SectionHeading
        index="04"
        eyebrow="Client & business work"
        title="Selected Client & Business Projects"
        description="Business-focused websites for different industries, presented through supplied site previews."
        id="client-projects-heading"
      />
      <div className="business-projects-grid">
        {businessProjects.map((project, index) => (
          <BusinessProjectCard key={project.number} project={project} index={index} />
        ))}
      </div>
      <div className="business-capabilities">
        <span className="section-index">BUILT AROUND THE BUSINESS</span>
        <p>
          Business websites, CMS-driven platforms, custom frontend experiences, and web solutions for
          different industries.
        </p>
        <a href="#contact">Discuss a business project <ArrowUpRight size={14} aria-hidden="true" /></a>
      </div>
    </section>
  );
}
