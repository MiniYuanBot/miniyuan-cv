import { RESUME_DATA } from "@/data/resume-data";
import { Awards } from "./components/Awards";
import { Coursework } from "./components/Coursework";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { ResearchExperience } from "./components/ResearchExperience";
import { Skills } from "./components/Skills";
import { Summary } from "./components/Summary";

export default function ResumePage() {
  return (
    <main className="resume-shell" id="main-content">
      <article className="resume" aria-labelledby="resume-name">
        <Header />
        <Summary summary={RESUME_DATA.summary} />
        <ResearchExperience research={RESUME_DATA.research} />
        <Projects projects={RESUME_DATA.projects} />
        <Skills skills={RESUME_DATA.skills} />
        <Awards awards={RESUME_DATA.awards} />
        <Coursework coursework={RESUME_DATA.coursework} />
      </article>
    </main>
  );
}
