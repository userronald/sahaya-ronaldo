import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";

const strengths = [
  { number: "01", label: "Full-stack & real-time applications" },
  { number: "02", label: "AI-integrated digital products" },
  { number: "03", label: "Business websites, CMS & freelance work" },
  { number: "04", label: "Writing, storytelling & digital content" },
];

export default function Profile() {
  return (
    <section className="profile-section section-shell" id="about" aria-labelledby="about-heading">
      <SectionHeading
        index="02"
        eyebrow="About me"
        title="Technical thinking. Creative perspective."
        id="about-heading"
      />
      <div className="profile-grid">
        <motion.div
          className="profile-statement"
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="profile-quote-mark" aria-hidden="true">“</span>
          <p>
            I bring interfaces, engineering, and real-world needs into the same conversation.
          </p>
          <span className="profile-signature">Sahaya Ronaldo S.</span>
        </motion.div>
        <div className="profile-copy">
          <p>
            I&apos;m Sahaya Ronaldo S., a Web Developer with approximately four
            years of experience building and maintaining modern web
            applications and business websites. My work brings together
            frontend engineering, backend integration, CMS platforms,
            database-driven applications, and AI-powered features.
          </p>
          <p>
            I primarily work with React.js, Next.js, TypeScript, and
            JavaScript, and also work with Node.js, Express.js, REST APIs,
            databases, authentication, and cloud services. I enjoy making a
            good user experience work hand in hand with practical engineering.
          </p>
          <p>
            From full-stack and real-time applications to WordPress and
            freelance business projects, I contribute across development,
            optimization, technical SEO, and ongoing maintenance. Writing,
            storytelling, and digital content bring a creative perspective to
            how I approach the work.
          </p>
          <a className="text-link" href="#experience">
            Explore my experience <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="strengths-strip">
        {strengths.map((strength) => (
          <div className="strength-item" key={strength.number}>
            <span>{strength.number}</span>
            <b>{strength.label}</b>
          </div>
        ))}
      </div>
    </section>
  );
}
