import { BriefcaseBusiness } from "lucide-react";
import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";

const roles = [
  {
    period: "NOVEMBER 2023 — PRESENT",
    company: "Demanzo",
    title: "Web Developer",
    status: "CURRENT ROLE",
    description:
      "Working on web development projects involving modern frontend technologies, business websites, web applications, website optimization, maintenance, and technical improvements.",
    responsibilities: [
      "Develop and maintain responsive websites and web applications",
      "Build frontend interfaces using React and related technologies",
      "Work with WordPress, custom themes, plugins, and CMS-based solutions",
      "Integrate APIs and improve application functionality",
      "Optimize website performance, loading speed, and user experience",
      "Implement technical SEO and website improvements",
      "Handle website maintenance and troubleshooting",
      "Coordinate development tasks and support team-level activities",
      "Collaborate with international stakeholders and teams",
      "Coordinate project handovers across Malaysia, Singapore, and Indonesia",
      "Support website deployment and hosting-related activities",
    ],
    highlights: ["Best Performer · FY 2025–26", "Promoted to Web Developer", "Project handovers & team coordination"],
  },
  {
    period: "JULY 2022 — AUGUST 2023",
    company: "Creative Technologies",
    title: "Web Developer",
    description:
      "Worked on website development, digital marketing support, online product promotion, and website hosting-related activities.",
    highlights: undefined,
    responsibilities: [
      "Developed and maintained business websites",
      "Worked with HTML, CSS, JavaScript, and WordPress",
      "Supported digital marketing and product promotion activities",
      "Assisted with website hosting, domain, and DNS configuration",
      "Worked on website content and improvements",
    ],
  },
];

export default function Experience() {
  return (
    <section className="experience-section section-shell" id="experience" aria-labelledby="experience-heading">
      <SectionHeading
        index="05"
        eyebrow="Experience"
        title="Growing through the work."
        description="A chronological view of my professional experience, responsibilities, and contributions."
        id="experience-heading"
      />
      <div className="experience-layout">
        <div className="experience-aside">
          <BriefcaseBusiness size={19} strokeWidth={1.5} aria-hidden="true" />
          <span>Career<br />timeline</span>
          <span className="experience-aside__line" />
          <span className="experience-aside__years">2022 — 26</span>
        </div>
        <div className="timeline">
          {roles.map((role, index) => (
            <motion.article
              className={`timeline-item${index === 0 ? " timeline-item--current" : ""}`}
              key={role.company}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <span className={`timeline-marker ${index === 0 ? "timeline-marker--current" : ""}`} aria-hidden="true" />
              <div className="timeline-item__period">{role.period}</div>
              <div className="timeline-item__content">
                <div>
                  <h3>{role.company}</h3>
                  <p className="timeline-item__role">{role.title}</p>
                </div>
                {role.status && <span className="current-pill"><i /> {role.status}</span>}
              </div>
              <p className="timeline-item__description">{role.description}</p>
              <h4 className="timeline-item__subheading">Responsibilities</h4>
              <ul className="timeline-responsibilities">
                {role.responsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>
              {role.highlights && (
                <div className="timeline-highlights" aria-label="Professional highlights">
                  <span className="timeline-item__subheading">Highlights</span>
                  <ul>
                    {role.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
