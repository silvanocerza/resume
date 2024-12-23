import Bio from "@/app/ui/bio";
import WorkExperience from "@/app/ui/work-experience";
import WorkProjects from "./ui/work-projects";
import PersonalProjects from "./ui/personal-projects";
import Talks from "@/app/ui/talks";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Bio />
      <WorkExperience />
      <WorkProjects />
      <Talks />
      <PersonalProjects />
    </div>
  );
}
