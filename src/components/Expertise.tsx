import { useState } from "react";
import SectionHeading from "./SectionHeading";

const expertise = [
  {
    title: "Frontend Engineering",
    description: "Building responsive interfaces and polished user experiences with modern web technologies.",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript ES6+",
      "TypeScript",
      "HTML5",
      "CSS3",
      "SCSS / SASS",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
      "DaisyUI",
      "Shadcn/UI",
      "Responsive Web Design",
    ],
  },
  {
    title: "State Management & Frontend Architecture",
    description: "Structuring frontend applications, shared state, navigation, and form workflows.",
    skills: [
      "Redux Toolkit",
      "Zustand",
      "React Context API",
      "React Query",
      "React Router",
      "Formik",
      "Yup",
      "Zod",
      "Vite",
      "Component-Based Architecture",
    ],
  },
  {
    title: "Backend Development",
    description: "Developing application services and connecting frontend experiences to backend systems.",
    skills: [
      "Node.js",
      "Express.js",
      "REST API Development",
      "API Integration",
      "Authentication",
      "JWT",
      "HTTP-only Cookies",
      "Socket.IO",
      "Middleware",
    ],
  },
  {
    title: "Databases & Cloud",
    description: "Working with relational and document databases, managed cloud platforms, and media services.",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Firebase",
      "Supabase",
      "MongoDB Atlas",
      "Cloudinary",
    ],
  },
  {
    title: "AI Integration",
    description: "Connecting AI and plant-identification services to useful, user-facing application features.",
    skills: [
      "OpenRouter",
      "AI API Integration",
      "OpenAI API Integration",
      "Plant Identification APIs",
      "AI-Assisted Application Development",
    ],
  },
  {
    title: "Development Tools & Deployment",
    description: "Using development, hosting, and deployment tools to ship and configure web projects.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Docker (exposure)",
      "Vercel",
      "Render",
      "cPanel",
      "FTP / SFTP",
      "Cloud Hosting",
      "Environment Configuration",
    ],
  },
  {
    title: "Performance & Optimization",
    description: "Improving site quality through performance measurement, optimization, and technical SEO.",
    skills: [
      "Lighthouse",
      "Google PageSpeed Insights",
      "Core Web Vitals",
      "Technical SEO",
      "Image Optimization",
      "Website Performance Optimization",
      "Responsive Performance",
    ],
  },
  {
    title: "CMS & Business Development",
    description: "Creating, maintaining, and optimizing websites and CMS-driven business experiences.",
    skills: [
      "WordPress",
      "Custom WordPress Themes",
      "Custom WordPress Plugins",
      "CMS Development",
      "CRM-Related Web Development",
      "Website Maintenance",
      "Business Website Development",
      "Technical SEO",
    ],
  },
];

export default function Expertise() {
  const [activeCategory, setActiveCategory] = useState(0);
  const selected = expertise[activeCategory];

  return (
    <section className="expertise-section section-shell" id="expertise" aria-labelledby="expertise-heading">
      <SectionHeading
        index="06"
        eyebrow="Technical expertise"
        title="A practical toolkit, across the stack."
        description="Explore the technologies and development practices I work with."
        id="expertise-heading"
      />
      <div className="expertise-explorer">
        <div className="expertise-categories" role="group" aria-label="Skill categories">
          {expertise.map((category, index) => (
            <button
              className={`expertise-category${activeCategory === index ? " expertise-category--active" : ""}`}
              type="button"
              key={category.title}
              aria-pressed={activeCategory === index}
              onClick={() => setActiveCategory(index)}
            >
              <span className="expertise-category__index">{String(index + 1).padStart(2, "0")}</span>
              <span className="expertise-category__title">{category.title}</span>
              <span className="expertise-category__count">{String(category.skills.length).padStart(2, "0")}</span>
            </button>
          ))}
        </div>
        <div className="expertise-detail" aria-live="polite">
          <div className="expertise-detail__meta">
            <span>SKILL AREA / {String(activeCategory + 1).padStart(2, "0")}</span>
            <span>{selected.skills.length} skills</span>
          </div>
          <h3>{selected.title}</h3>
          <p>{selected.description}</p>
          <ul className="expertise-skills" aria-label={`${selected.title} skills`}>
            {selected.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
          <div className="expertise-detail__foot">
            <span aria-hidden="true" />
            Skills shown without proficiency ratings
          </div>
        </div>
      </div>
    </section>
  );
}
