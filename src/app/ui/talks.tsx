import Talk from "@/app/components/talk";

export default function Talks() {
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
        <Talk
          name="Monitoring Open Source Success in Arduino"
          icon="fa-brands fa-youtube"
          link="https://www.youtube.com/watch?v=C4JxwgNnIWU"
          link_text="/watch?v=C4JxwgNnIWU"
          date="Oct 2021"
        >
          In this talk, I tell the story of how my team started using Datadog in
          an unusual way to monitor the success of one of the most important of
          its Open Source projects, the Arduino CLI, by gathering download
          information from different sources and monitoring build failures. I
          also explore some of the next steps we can take to gain insight into
          our other projects.
        </Talk>
        <Talk
          name="Haystack 2.0: the story of a rewrite"
          icon="fa-brands fa-youtube"
          link="https://www.youtube.com/watch?v=0CNSvGlMNSo"
          link_text="/watch?v=0CNSvGlMNSo"
          date="Apr 2024"
        >
          This talk focuses on telling the story of the Haystack 2.0 rewrite
          that I tackled together with my team. I show some of the pro and cons
          of starting a rewrite. I also outline some important to do tasks that
          must be taken into consideration when embarking the rewrite boat. In
          the end I also present some differences between Haystack 1 and 2 to
          show off the enhancement we could make because of the rewrite.
        </Talk>
      </div>
    </div>
  );
}
