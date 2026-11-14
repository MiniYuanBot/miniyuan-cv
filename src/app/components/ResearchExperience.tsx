import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";

type Research = (typeof RESUME_DATA)["research"][number];

interface ResearchTimeProps {
  time: Research["time"];
}

/**
 * Displays the research period on the right side of the item header
 */
function ResearchTime({ time }: ResearchTimeProps) {
  return (
    <div className="shrink-0 text-sm tabular-nums text-gray-500 print:text-[10px] print:text-black print:font-normal">
      {time}
    </div>
  );
}

interface ResearchTitleProps {
  title: Research["title"];
  link?: Research["link"];
}

/**
 * Renders the research title, linked when a url is available
 */
function ResearchTitle({ title, link }: ResearchTitleProps) {
  if (!link) {
    return <span>{title}</span>;
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 hover:underline"
      aria-label={`${title} (opens in new tab)`}
    >
      {title}
    </a>
  );
}

interface ResearchMetaProps {
  research: Research;
}

/**
 * Displays the hosting organization and the applicant role
 */
function ResearchMeta({ research }: ResearchMetaProps) {
  const { organization, role } = research;
  const meta = [organization, role].filter(Boolean).join(" · ");

  if (!meta) return null;

  return (
    <div className="text-xs text-foreground/80 print:text-[10px]">{meta}</div>
  );
}

interface ResearchItemProps {
  research: Research;
}

/**
 * Individual research entry: title + period header, meta, description
 */
function ResearchItem({ research }: ResearchItemProps) {
  const { title, link, time, description } = research;

  return (
    <Card className="py-1 print:py-0 print:border-0 print:shadow-none">
      <CardHeader className="print:space-y-0 print:p-0">
        <div className="flex items-baseline justify-between gap-x-2 text-base print:text-sm">
          <h3 className="font-semibold leading-none print:text-sm">
            <ResearchTitle title={title} link={link} />
          </h3>
          <ResearchTime time={time} />
        </div>
      </CardHeader>

      <CardContent className="mt-1 print:p-0">
        <ResearchMeta research={research} />
        <div className="mt-1 text-pretty text-xs text-foreground/80 print:text-[10px] print:leading-tight">
          {description}
        </div>
      </CardContent>
    </Card>
  );
}

interface ResearchExperienceProps {
  research: (typeof RESUME_DATA)["research"];
}

/**
 * Research Experience section, listing research projects chronologically
 */
export function ResearchExperience({ research }: ResearchExperienceProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold" id="research-experience">
        Research Experience
      </h2>
      <div
        className="space-y-3 print:space-y-1"
        role="feed"
        aria-labelledby="research-experience"
      >
        {research.map((item) => (
          <article
            key={`${item.title}-${item.time}`}
            className="print:break-inside-avoid"
          >
            <ResearchItem research={item} />
          </article>
        ))}
      </div>
    </Section>
  );
}
