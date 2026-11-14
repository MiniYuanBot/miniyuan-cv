import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";

type Award = (typeof RESUME_DATA)["awards"][number];

interface AwardTimeProps {
  time: Award["time"];
}

/**
 * Displays the award date on the right side of the item header
 */
function AwardTime({ time }: AwardTimeProps) {
  return (
    <div className="shrink-0 text-sm tabular-nums text-gray-500 print:text-[10px] print:text-black print:font-normal">
      {time}
    </div>
  );
}

interface AwardItemProps {
  award: Award;
}

/**
 * Individual award entry: title + date header, issuer, optional description
 */
function AwardItem({ award }: AwardItemProps) {
  const { title, organization, time, description } = award;

  return (
    <Card className="py-1 print:py-0 print:border-0 print:shadow-none">
      <CardHeader className="print:space-y-0 print:p-0">
        <div className="flex items-baseline justify-between gap-x-2 text-base print:text-sm">
          <h3 className="font-semibold leading-none print:text-sm">{title}</h3>
          <AwardTime time={time} />
        </div>
      </CardHeader>

      <CardContent className="print:p-0">
        <div className="mt-1 text-xs text-foreground/80 print:text-[10px]">
          {organization}
        </div>
        {description ? (
          <div className="mt-1 text-pretty text-xs text-foreground/80 print:text-[10px] print:leading-tight">
            {description}
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}

interface AwardsProps {
  awards: (typeof RESUME_DATA)["awards"];
}

/**
 * Awards section, listing scholarships, honors and competition results
 */
export function Awards({ awards }: AwardsProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold" id="awards">
        Awards
      </h2>
      <div
        className="space-y-3 print:space-y-1"
        role="feed"
        aria-labelledby="awards"
      >
        {awards.map((award) => (
          <article
            key={`${award.title}-${award.time}`}
            className="print:break-inside-avoid"
          >
            <AwardItem award={award} />
          </article>
        ))}
      </div>
    </Section>
  );
}
