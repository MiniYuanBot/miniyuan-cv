import { Section } from "@/components/ui/section";
import type { ResumeData } from "@/lib/types";

export function Skills({ skills }: Pick<ResumeData, "skills">) {
  if (skills.length === 0) return null;

  return (
    <Section aria-labelledby="skills-section">
      <h2 id="skills-section">Skills</h2>
      <ul className="resume-skills" aria-label="专业技能">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </Section>
  );
}
