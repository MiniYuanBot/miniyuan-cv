import { Section } from "@/components/ui/section";
import type { ResumeData } from "@/lib/types";

export function Awards({ awards }: Pick<ResumeData, "awards">) {
  if (awards.length === 0) return null;

  return (
    <Section aria-labelledby="awards">
      <h2 id="awards">Awards</h2>
      <div className="resume-entries">
        {awards.map((award) => (
          <article
            key={`${award.title}-${award.time}`}
            className="resume-entry resume-award"
          >
            <div className="resume-entry-heading">
              <h3>{award.title}</h3>
              <span className="resume-date">{award.time}</span>
            </div>
            <p className="resume-meta">{award.organization}</p>
            {award.description && (
              <div className="resume-description">{award.description}</div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
