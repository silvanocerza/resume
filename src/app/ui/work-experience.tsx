import { Experience, ExperienceProps } from "@/app/components/experience";
import { config } from "@/app/lib/utils";

type ExperienceData = Omit<ExperienceProps, "children"> & {
  description?: string;
};

function createExperience(exp: ExperienceData) {
  return (
    <Experience
      key={exp.name}
      name={exp.name}
      link={exp.link}
      link_text={exp.link_text}
      start_date={exp.start_date}
      end_date={exp.end_date}
      technologies={exp.technologies}
    >
      {exp.description}
    </Experience>
  );
}

export default function WorkExperience() {
  const { work_experience }: { work_experience: ExperienceData[] } = config;
  // Experiences with description take more space so we render them first.
  // Then we render the rest of the experiences three by three.
  const experiencesWithDesc: ExperienceData[] = work_experience.filter(
    (exp) => exp.description,
  );
  const experiencesWithoutDesc: ExperienceData[][] = work_experience
    .filter((exp) => !exp.description)
    .reduce((acc, _, index, array) => {
      if (index % 3 === 0) {
        acc.push(array.slice(index, index + 3));
      }
      return acc;
    }, [] as ExperienceData[][]);
  return (
    <div className="print:break-after-page">
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
        Work Experience
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 print:grid-cols-2 ">
        {experiencesWithDesc.map(createExperience)}

        {experiencesWithoutDesc.map((exps: ExperienceData[], index: number) => (
          <div key={index} className="flex flex-col gap-4">
            {exps.map(createExperience)}
          </div>
        ))}
      </div>
    </div>
  );
}
