import Bio from "@/app/ui/bio";
import WorkExperience from "@/app/ui/work-experience";
import Projects from "@/app/ui/projects";
import Talks from "@/app/ui/talks";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Bio />
      <WorkExperience />
      <Projects />
      <Talks />
    </div>
  );
}
