import { Section } from "@/components/ui/section";
import type { ResumeData } from "@/lib/types";

export function Summary({ summary }: Pick<ResumeData, "summary">) {
  if (!summary) return null;

  return (
    <Section aria-labelledby="about-section">
      <h2 id="about-section">About</h2>
      <div className="resume-summary">{summary}</div>
    </Section>
  );
}
