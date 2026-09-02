import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";
import { cn } from "@/lib/utils";

type WorkExperience = (typeof RESUME_DATA)["coursework"][number];
type WorkBadges = readonly string[];

interface BadgeListProps {
  className?: string;
  badges: WorkBadges;
}

/**
 * Renders a list of badges for work experience
 * Handles both mobile and desktop layouts through className prop
 */
function BadgeList({
  className,
  badges,
}: BadgeListProps) {
  if (badges.length === 0) return null;

  return (
    <ul
      className={cn("inline-flex list-none gap-x-1 p-0", className)}
      aria-label="Technologies used"
    >
      {badges.map((badge) => (
        <li key={badge}>
          <Badge
            variant="secondary"
            className="align-middle font-mono text-xs print:px-1 print:py-0 print:text-xs print:leading-tight print:border print:border-gray-300"
          >
            {badge}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface CourseTimeProps {
  time: WorkExperience["time"];
}

/**
 * Displays the work period in a consistent format
 */
function CourseTime({
  time,
}: CourseTimeProps) {
  return (
    <div
      className="text-sm tabular-nums text-gray-500 print:text-[10px] print:text-black print:font-normal"
      title={`Course time: ${time}`}
    >
      {time}
    </div>
  );
}

interface CourseProps {
  course: WorkExperience["course"];
}

/**
 * Renders company name with optional link
 */
function CourseLink({
  course,
}: CourseProps) {
  return (
    <div className="print:text-sm">{course}</div>
  );
}

interface WorkExperienceItemProps {
  work: WorkExperience;
}

interface CourseGradeProps {
  grade: WorkExperience["grade"];
}

function CourseGrade({
  grade,
}: CourseGradeProps) {
  return (
    <div className="print:text-[10px] print:text-black">{`成绩 ${grade}`}</div>
  );
}

/**
 * Individual work experience card component
 * Handles responsive layout for badges (mobile/desktop)
 */
function WorkExperienceItem({
  work,
}: WorkExperienceItemProps) {
  const { course, badges, time, grade, description } = work;

  return (
    <Card className="py-1 print:py-0 print:border-0 print:shadow-none">
      <CardHeader className="print:space-y-0 print:p-0">
        <div className="flex items-center justify-between gap-x-2 text-base print:text-sm">
          <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none print:text-sm">
            <CourseLink course={course} />
          </h3>
          <CourseTime time={time} />
        </div>
      </CardHeader>

      <CardContent className="print:p-0">
        {/* 移动端布局：标签在上，成绩在下 */}
        <div className="flex flex-col gap-1 sm:hidden">
          <BadgeList
            className="flex-wrap gap-1"
            badges={badges}
          />
          <CourseGrade grade={grade} />
        </div>
        
        {/* 桌面和打印布局：标签和成绩在同一行 */}
        <div className="hidden sm:flex items-center justify-between gap-x-2 text-base mt-2 print:mt-0">
          <BadgeList
            className="flex-wrap gap-1 print:gap-0.5"
            badges={badges}
          />
          <CourseGrade grade={grade} />
        </div>
        
        {/* 描述文本 */}
        <div className="mt-2 text-xs text-foreground/80 print:mt-1 print:text-xs print:leading-tight text-pretty">
          {description}
        </div>
      </CardContent>
    </Card>
  );
}

interface WorkExperienceProps {
  work: (typeof RESUME_DATA)["coursework"];
}

/**
 * Main work experience section component
 * Renders a list of work experiences in chronological order
 */
export function WorkExperience({
  work,
}: WorkExperienceProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold" id="work-experience">
        Coursework
      </h2>
      <div
        className="space-y-4 print:space-y-1"
        role="feed"
        aria-labelledby="work-experience"
      >
        {work.map((item) => (
          <article key={`${item.course}-${item.time}`} className="print:break-inside-avoid">
            <WorkExperienceItem work={item} />
          </article>
        ))}
      </div>
    </Section>
  );
}
