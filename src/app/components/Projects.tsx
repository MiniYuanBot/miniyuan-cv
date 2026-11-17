import { ArrowUpRightIcon } from "lucide-react";
import { Section } from "@/components/ui/section";
import type { ResumeData } from "@/lib/types";

export function Projects({ projects }: Pick<ResumeData, "projects">) {
  if (projects.length === 0) return null;

  return (
    <Section aria-labelledby="engineering-projects">
      <h2 id="engineering-projects">Engineering Projects</h2>
      <div className="resume-entries">
        {projects.map((project) => (
          <article key={project.title} className="resume-entry resume-project">
            <div className="resume-entry-heading">
              <h3>{project.title}</h3>
              {project.link && (
                <a
                  className="resume-project-link resume-icon-link"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`访问 ${project.title}（在新标签页打开）`}
                  title={project.link}
                >
                  <ArrowUpRightIcon aria-hidden="true" focusable="false" />
                  <span className="resume-link-label">
                    {project.link
                      .replace(/^https?:\/\//, "")
                      .replace(/\/$/, "")}
                  </span>
                </a>
              )}
            </div>
            {project.techStack.length > 0 && (
              <p className="resume-meta">{project.techStack.join(" · ")}</p>
            )}
            <p className="resume-description">{project.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
