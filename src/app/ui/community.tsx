import { Experience, ExperienceProps } from "@/app/components/experience";
import { config } from "@/app/lib/utils";

type CommunityData = Omit<ExperienceProps, "children"> & {
  role?: string;
  description?: string;
};

export default function Community() {
  const { community }: { community: CommunityData[] } = config;
  if (!community || community.length === 0) {
    return null;
  }
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
        Community
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 print:grid-cols-2">
        {community.map((entry) => (
          <Experience
            key={entry.name}
            name={entry.name}
            link={entry.link}
            link_text={entry.link_text}
            start_date={entry.start_date}
            end_date={entry.end_date}
            technologies={entry.technologies || []}
          >
            {entry.description}
          </Experience>
        ))}
      </div>
    </div>
  );
}
