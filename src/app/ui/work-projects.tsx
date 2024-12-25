import { Project, ProjectProps } from "@/app/components/project";
import { config } from "@/app/lib/utils";

type ProjectData = Omit<ProjectProps, "children"> & { description?: string };

function createProject(project: ProjectData) {
  return (
    <Project
      key={project.name}
      name={project.name}
      icon={project.icon}
      link={project.link}
      link_text={project.link_text}
      technologies={project.technologies}
    >
      {project.description}
    </Project>
  );
}

export default function WorkProjects() {
  const { work_projects }: { work_projects: ProjectData[] } = config;
  return (
    <div>
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
        Work Projects
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 print:grid-cols-2 ">
        {work_projects.map(createProject)}
      </div>
    </div>
  );
}
