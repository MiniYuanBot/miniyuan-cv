import type React from "react";

export type IconType =
  | "github"
  | "linkedin"
  | "x"
  | "globe"
  | "mail"
  | "phone";

export interface ResumeData {
  name: string;
  initials: string;
  location: string;
  about: string;
  summary: React.ReactNode;
  avatarUrl: string;
  personalWebsiteUrl: string;
  contact: {
    email: string;
    tel: string;
    social: Array<{
      name: string;
      url: string;
      icon: IconType;
    }>;
  };
  coursework: Array<{
    course: string;
    badges: string[];
    time: string;
    grade: string;
    description: string | React.ReactNode;
  }>;
  skills: string[];
  projects: Array<{
    title: string;
    techStack: string[];
    description: string;
    link?: string;
  }>;
}
