import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";
import { projects, type Project, type ProjectCategory } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

type ProjectPreviewProps = {
  project: Project;
};

function ProjectMockup({ project }: ProjectPreviewProps) {
  if (project.visual === "ping") {
    return (
      <div className="preview preview--ping" aria-hidden="true">
        <div className="preview-window">
          <div className="preview-window__bar"><i /><i /><i /><span>ping / workspace</span></div>
          <div className="ping-interface">
            <div className="ping-sidebar"><b>ping.</b><span /><span /><span /></div>
            <div className="ping-chat">
              <small>YOUR AI ASSISTANT</small>
              <div className="chat-line chat-line--user">Help me think this through.</div>
              <div className="chat-line chat-line--reply">Let&apos;s break it into a few clear steps.</div>
              <div className="chat-input">Ask anything <span>↗</span></div>
            </div>
          </div>
        </div>
        <span className="preview-caption">A conversation, made useful.</span>
      </div>
    );
  }

  if (project.visual === "plant") {
    return (
      <div className="preview preview--plant" aria-hidden="true">
        <div className="plant-panel">
          <div className="plant-panel__top"><span>PLANT CARE / 01</span><span>↗</span></div>
          <div className="plant-illustration">
            <span className="plant-stem" />
            <i className="leaf leaf--one" /><i className="leaf leaf--two" />
            <i className="leaf leaf--three" /><i className="leaf leaf--four" />
            <span className="plant-pot" />
          </div>
          <div className="plant-panel__bottom"><b>Know what it needs.</b><span>Scan · Understand · Care</span></div>
        </div>
        <span className="preview-caption">From a scan to the next step.</span>
      </div>
    );
  }

  const labels = {
    hfs: ["FINANCIAL SERVICES", "HFS", "A business platform."],
    research: ["RESEARCH & ACADEMIA", "GKPHD", "A research centre online."],
    logistics: ["LOGISTICS & TRANSPORT", "VISHWA TRANS", "Moving business forward."],
    writer: ["CREATIVE WRITING", "WORDS", "Stories · Poetry · Composition"],
  } as const;
  const [eyebrow, title, caption] = labels[project.visual];

  return (
    <div className={`preview preview--${project.visual}`} aria-hidden="true">
      <div className="business-preview">
        <span className="business-preview__eyebrow">{eyebrow}</span>
        <strong>{title}</strong>
        <span className="business-preview__rule" />
        <span className="business-preview__caption">{caption}</span>
        <span className="business-preview__mark">{project.number}</span>
      </div>
    </div>
  );
}

function ProjectPreview({ project }: ProjectPreviewProps) {
  const [imageAvailable, setImageAvailable] = useState(Boolean(project.image));

  if (!imageAvailable || !project.image) return <ProjectMockup project={project} />;

  return (
    <div className={`preview preview--image preview--${project.visual}`} aria-hidden="true">
      <img
        className="project-preview-image"
        src={project.image}
        alt=""
        loading="lazy"
        decoding="async"
        onError={() => setImageAvailable(false)}
      />
      <span className="project-preview-overlay">
        <span>{project.category}</span>
        <strong>{project.name}</strong>
      </span>
      <span className="project-preview-number">{project.number}</span>
    </div>
  );
}

function ProjectCard({ project, featured = false }: ProjectPreviewProps & { featured?: boolean }) {
  return (
    <motion.article
      className={`project-card ${featured ? "project-card--featured" : ""}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55 }}
    >
      <a
        className="project-card__link"
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${project.name}${project.sourceUrl ? " live site" : ""} (opens in a new tab)`}
      >
        <ProjectPreview project={project} />
        <div className="project-card__meta">
          <span>{project.number} / {project.category}</span>
          <ArrowUpRight size={17} aria-hidden="true" />
        </div>
        <div className="project-card__details">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      </a>
    </motion.article>
  );
}

function PingCaseStudy({ project }: ProjectPreviewProps) {
  const [imageAvailable, setImageAvailable] = useState(true);

  return (
    <motion.article
      className="ping-case-study"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55 }}
    >
      <div className="ping-case-study__topline">
        <span><i /> PRIMARY FEATURE / {project.number}</span>
        <span>FULL-STACK APPLICATION · REAL-TIME MESSAGING · AI</span>
      </div>
      <div className="ping-case-study__main">
        <a
          className="ping-case-study__preview"
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Ping AI live demo in a new tab"
        >
          <div className="ping-case-study__browserbar" aria-hidden="true">
            <span><i /><i /><i /></span>
            <span>ping / messaging workspace</span>
            <ExternalLink size={13} />
          </div>
          {imageAvailable ? (
            <img
              src={project.image}
              alt="Ping AI real-time messaging application interface"
              loading="lazy"
              decoding="async"
              onError={() => setImageAvailable(false)}
            />
          ) : (
            <ProjectMockup project={project} />
          )}
          <span className="ping-case-study__preview-label"><i /> Live application preview</span>
        </a>
        <div className="ping-case-study__information">
          <div className="ping-case-study__category">01 <span>/</span> FULL-STACK PRODUCT</div>
          <h3>Ping <em>AI</em></h3>
          <p>{project.description} Built with a responsive chat interface, backend API integration, and connected AI services.</p>
          <a
            className="ping-case-study__demo"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View live demo <ExternalLink size={15} aria-hidden="true" />
          </a>
          <span className="ping-case-study__url">glee-s7rr.onrender.com</span>
        </div>
      </div>
      <div className="ping-case-study__details">
        <div className="ping-case-study__detail">
          <div className="ping-case-study__detail-heading">
            <span className="section-index">A / TECHNOLOGY</span>
            <span className="eyebrow">Application stack</span>
          </div>
          <div className="ping-tech-list">
            {project.techStack?.map((technology) => <span key={technology}>{technology}</span>)}
          </div>
        </div>
        <div className="ping-case-study__detail">
          <div className="ping-case-study__detail-heading">
            <span className="section-index">B / CAPABILITIES</span>
            <span className="eyebrow">Key features</span>
          </div>
          <ul className="ping-feature-list">
            {project.features?.map((feature) => (
              <li key={feature}><Check size={13} aria-hidden="true" />{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}

function PlantCompanionCaseStudy({ project }: ProjectPreviewProps) {
  const [imageAvailable, setImageAvailable] = useState(true);

  return (
    <motion.article
      className="plant-case-study"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay: 0.06 }}
    >
      <div className="plant-case-study__topline">
        <span><i /> AI APPLICATION / {project.number}</span>
        <span>PLANT IDENTIFICATION · SMART GARDEN MANAGEMENT</span>
      </div>
      <div className="plant-case-study__main">
        <a
          className="plant-product-preview"
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open AI Plant Companion live application in a new tab"
        >
          <div className="plant-product-preview__chrome">
            <span className="plant-product-preview__brand"><i>✳</i> AI Plant Companion</span>
            <span>MY GARDEN <b>/</b> TODAY</span>
            <span className="plant-product-preview__profile">S</span>
          </div>
          <div className="plant-product-preview__canvas">
            {imageAvailable ? (
              <img
                className="plant-product-preview__dashboard"
                src={project.image}
                alt="AI Plant Companion garden dashboard with plant care tasks"
                loading="lazy"
                decoding="async"
                onError={() => setImageAvailable(false)}
              />
            ) : (
              <div className="plant-product-preview__fallback">
                <span>YOUR GROWING SPACE</span>
                <strong>A good day to grow.</strong>
                <span>Plant profiles · Care reminders · Plant Doctor</span>
              </div>
            )}
            <span className="plant-product-preview__caption"><i /> PRODUCT INTERFACE / GARDEN DASHBOARD</span>
          </div>
        </a>
        <div className="plant-case-study__information">
          <div className="plant-case-study__category">02 <span>/</span> AI-ASSISTED PRODUCT</div>
          <h3>AI Plant<br /><em>Companion</em></h3>
          <p>{project.description} A connected garden experience for plant profiles, identification, and practical care guidance.</p>
          <a
            className="plant-case-study__demo"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore live application <ExternalLink size={15} aria-hidden="true" />
          </a>
          <span className="plant-case-study__url">your-s-plant-app.vercel.app</span>
        </div>
      </div>
      <div className="plant-case-study__details">
        <div className="plant-case-study__detail">
          <div className="plant-case-study__detail-heading">
            <span className="section-index">A / TECHNOLOGY</span>
            <span className="eyebrow">Application stack</span>
          </div>
          <div className="plant-tech-list">
            {project.techStack?.map((technology) => <span key={technology}>{technology}</span>)}
          </div>
        </div>
        <div className="plant-case-study__detail">
          <div className="plant-case-study__detail-heading">
            <span className="section-index">B / PRODUCT FEATURES</span>
            <span className="eyebrow">Care, organized</span>
          </div>
          <ul className="plant-feature-list">
            {project.features?.map((feature) => (
              <li key={feature}><Check size={13} aria-hidden="true" />{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}

function CreativeWriterCaseStudy({ project }: ProjectPreviewProps) {
  return (
    <motion.article
      className="writer-case-study"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55 }}
    >
      <div className="writer-case-study__topline">
        <span><i /> CREATIVE DIRECTION / {project.number}</span>
        <span>PERSONAL BRANDING · CREATIVE WEB DEVELOPMENT</span>
      </div>
      <div className="writer-case-study__main">
        <a
          className="writer-artboard writer-artboard--image"
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit the Creative Writer Portfolio live site in a new tab"
        >
          <img
            className="writer-artboard__screenshot"
            src={project.image}
            alt="Creative Writer Portfolio live site featuring editorial typography and writing imagery"
            loading="lazy"
            decoding="async"
          />
          <span className="writer-artboard__tag"><i /> LIVE SITE PREVIEW</span>
        </a>
        <div className="writer-case-study__information">
          <div className="writer-case-study__category">06 <span>/</span> CREATIVE WEB DEVELOPMENT</div>
          <h3>Creative<br /><em>Writer Portfolio</em></h3>
          <p>{project.description} The direction pairs expressive typography with an editorial approach and subtle motion to let the writing lead.</p>
          <a
            className="writer-case-study__demo"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit live portfolio <ExternalLink size={15} aria-hidden="true" />
          </a>
          <span className="writer-case-study__url">passionportfolio.vercel.app</span>
          {project.sourceUrl && (
            <a className="writer-case-study__source" href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
              Source on GitHub <Github size={13} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
      <div className="writer-case-study__details">
        <div className="writer-case-study__detail">
          <span className="section-index">A / CREATIVE FOUNDATION</span>
          <strong>Technology meets storytelling.</strong>
          <p>A personal project exploring how a digital experience can give creative writing its own visual presence.</p>
        </div>
        <div className="writer-case-study__detail">
          <span className="section-index">B / DESIGN LANGUAGE</span>
          <div className="writer-pill-list">
            <span>Editorial typography</span>
            <span>Storytelling</span>
            <span>Poetry</span>
            <span>Written compositions</span>
            <span>Subtle motion</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

type ProjectRailProps = {
  label: string;
  number: string;
  projects: Project[];
  featuredFirst?: boolean;
};

function ProjectRail({ label, number, projects: items, featuredFirst = false }: ProjectRailProps) {
  const railRef = useRef<HTMLDivElement>(null);

  const scrollRail = (direction: -1 | 1) => {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({
      left: direction * rail.clientWidth * 0.72,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  };

  return (
    <div className="project-group">
      <div className="project-group__heading">
        <div className="project-group__label"><span>{number}</span> {label}</div>
        <div className="rail-controls" aria-label={`${label} showcase controls`}>
          <button type="button" aria-label={`Previous ${label.toLowerCase()}`} aria-controls={`project-rail-${number}`} onClick={() => scrollRail(-1)}>
            <ArrowLeft size={15} aria-hidden="true" />
          </button>
          <button type="button" aria-label={`Next ${label.toLowerCase()}`} aria-controls={`project-rail-${number}`} onClick={() => scrollRail(1)}>
            <ArrowRight size={15} aria-hidden="true" />
          </button>
        </div>
      </div>
      <div id={`project-rail-${number}`} className={`project-grid ${featuredFirst ? "project-grid--apps" : "project-grid--business"}`} ref={railRef} tabIndex={0} aria-label={`${label} project showcase`}>
        {items.map((project, index) => (
          <ProjectCard key={project.number} project={project} featured={featuredFirst && index === 0} />
        ))}
      </div>
    </div>
  );
}

const filters: Array<"All work" | ProjectCategory> = [
  "All work",
  "Application",
  "Creative portfolio",
];

export default function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All work");
  const visibleProjects =
    filter === "All work" ? projects : projects.filter((project) => project.category === filter);
  const ping = projects.find((project) => project.visual === "ping");
  const plant = projects.find((project) => project.visual === "plant");
  const writer = projects.find((project) => project.visual === "writer");
  const showPing = (filter === "All work" || filter === "Application") && ping !== undefined;
  const showPlant = (filter === "All work" || filter === "Application") && plant !== undefined;
  const showWriter = (filter === "All work" || filter === "Creative portfolio") && writer !== undefined;
  const applications = visibleProjects.filter(
    (project) =>
      project.category === "Application" &&
      project.visual !== "ping" &&
      project.visual !== "plant",
  );
  return (
    <section className="work-section section-shell" id="work" aria-labelledby="work-heading">
      <SectionHeading
        index="03"
        eyebrow="Selected work"
        title="Built for the real world."
        description="A selection of web applications and business platforms. Each project opens its live site."
        id="work-heading"
      />
      <div className="work-toolbar">
        <span className="eyebrow">Six projects / three featured stories</span>
        <div className="project-filters" role="group" aria-label="Filter projects">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              className={filter === item ? "is-active" : ""}
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      {showPing && ping && <PingCaseStudy project={ping} />}
      {showPlant && plant && <PlantCompanionCaseStudy project={plant} />}
      {showWriter && writer && <CreativeWriterCaseStudy project={writer} />}
      {applications.length > 0 && (
        <ProjectRail label="More applications" number="02" projects={applications} featuredFirst />
      )}
    </section>
  );
}
