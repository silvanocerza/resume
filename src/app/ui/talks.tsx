import { Talk, TalkProps } from "@/app/components/talk";
import { config } from "@/app/lib/utils";

type TalkData = Omit<TalkProps, "children"> & { description?: string };

function createTalk(talk: TalkData) {
  return (
    <Talk
      key={talk.name}
      name={talk.name}
      icon={talk.icon}
      link={talk.link}
      link_text={talk.link_text}
      date={talk.date}
    >
      {talk.description}
    </Talk>
  );
}

export default function Talks() {
  const { talks }: { talks: TalkData[] } = config;
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
        Talks
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        {talks.map(createTalk)}
      </div>
    </div>
  );
}
