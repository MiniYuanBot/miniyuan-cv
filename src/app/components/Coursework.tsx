import { Section } from "@/components/ui/section";
import type { ResumeData } from "@/lib/types";

export function Coursework({ coursework }: Pick<ResumeData, "coursework">) {
  if (coursework.length === 0) return null;

  return (
    <Section aria-labelledby="coursework">
      <h2 id="coursework">Coursework</h2>
      <div className="resume-course-grid">
        {coursework.map((item) => (
          <article key={item.course} className="resume-entry resume-course">
            <div className="resume-entry-heading">
              <h3>{item.course}</h3>
              <span className="resume-grade" aria-label={`成绩 ${item.grade}`}>
                {item.grade}
              </span>
            </div>
            <div className="resume-description">{item.description}</div>
          </article>
        ))}
      </div>
    </Section>
  );
}
