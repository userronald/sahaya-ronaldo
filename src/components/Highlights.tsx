import SectionHeading from "./SectionHeading";

const highlights = [
  { index: "01 / RECOGNITION", title: "Best Performer", note: "FY 2025–26 · Demanzo" },
  { index: "02 / CAREER", title: "Promoted to Web Developer", note: "At Demanzo" },
  { index: "03 / COLLABORATION", title: "International handovers", note: "Malaysia · Singapore · Indonesia" },
  { index: "04 / PRACTICE", title: "Across the web stack", note: "Applications · AI features · business websites" },
];

export default function Highlights() {
  return (
    <section className="highlights-section section-shell" aria-labelledby="highlights-heading">
      <SectionHeading
        index="07"
        eyebrow="Professional highlights"
        title="Recognition, responsibility, and range."
        description="Career milestones and working contexts that have shaped my development practice."
        id="highlights-heading"
      />
      <div className="highlights-grid">
        {highlights.map((highlight) => (
          <div className="highlight-item" key={highlight.index}>
            <span className="highlight-item__index">{highlight.index}</span>
            <h3>{highlight.title}</h3>
            <p>{highlight.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
