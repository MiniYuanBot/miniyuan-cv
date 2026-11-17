import { Section } from "@/components/ui/section";
import type { ResumeData } from "@/lib/types";

export function ResearchExperience({ research }: Pick<ResumeData, "research">) {
  if (research.length === 0) return null;

  return (
    <Section aria-labelledby="research-experience">
      <h2 id="research-experience">Research Experience</h2>
      <div className="resume-entries">
        {research.map((item) => (
          <article
            key={`${item.title}-${item.time}`}
            className="resume-entry resume-research"
          >
            <div className="resume-entry-heading">
              <h3>
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                ) : (
                  item.title
                )}
              </h3>
              <span className="resume-date">{item.time}</span>
            </div>
            <p className="resume-meta">
              {[item.organization, item.role].filter(Boolean).join(" · ")}
            </p>
            <div className="resume-description">{item.description}</div>
          </article>
        ))}
      </div>
    </Section>
  );
}
