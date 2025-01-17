import { Project, ProjectProps } from "@/app/components/project";
import { config } from "@/app/lib/utils";

type ProjectData = Omit<ProjectProps, "children"> & { description?: string };

function createProject(project: ProjectData) {
  return (
    <Project
      key={project.name}
      name={project.name}
      type={project.type}
      icon={project.icon}
      link={project.link}
      link_text={project.link_text}
      technologies={project.technologies}
    >
      {project.description}
    </Project>
  );
}

export default function Projects() {
  const { projects }: { projects: ProjectData[] } = config;
  return (
    <div className="print:break-inside-avoid-page">
      <h2
        className="
      text-2xl
      font-bold
      pb-2
      mb-2
      border-dashed
      border-b-2
      border-green-600"
      >
        Projects
      </h2>
      <div className="columns-1 md:columns-2 print:columns-2 gap-4">
        {projects.map(createProject)}
      </div>
    </div>
  );
}
