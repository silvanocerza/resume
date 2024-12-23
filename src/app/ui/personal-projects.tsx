import Project from "@/app/components/project";

export default function PersonalProjects() {
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
        Personal Projects
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        <Project
          name="Caina"
          icon="fa-brands fa-github"
          link="https://github.com/silvanocerza/caina"
          link_text="/silvanocerza/caina"
          technologies={["Rust"]}
        >
          Experimental Rust library implementing the BitTorrent protocol.
        </Project>
        <Project
          name="graph-matplotlib"
          icon="fa-brands fa-github"
          link="https://github.com/silvanocerza/graph-matplotlib"
          link_text="/silvanocerza/graph-matplotlib"
          technologies={["Python", "Matplotlib"]}
        >
          Experimental Python library that attempts to reimplement dagrejs
          library, the backend library that's used by Mermaid to draw
          flowcharts.
        </Project>
        <Project
          name="Yellow Rats"
          icon="fa-brands fa-github"
          link="https://github.com/silvanocerza/yellow-rats"
          link_text="/silvanocerza/yellow-rats"
          technologies={["C++", "OpenCV", "ZBar", "CMake"]}
        >
          A simple GUI written in C++ using OpenCV and ZBar, to scan and catalog
          comics by number and quality.
        </Project>
        <Project
          name="Datadog Agent"
          icon="fa-brands fa-github"
          link="https://github.com/DataDog/datadog-agent"
          link_text="DataDog/datadog-agent"
          technologies={["C", "C++", "CPython", "Go"]}
        >
          I contributed to Six, a C++ wrapper around the CPython API supporting
          multiple versions of Python that can be used by other languages like
          Go.
        </Project>
        <Project
          name="Bank Reader"
          icon="fa-brands fa-github"
          link="https://github.com/silvanocerza/bank-reader"
          link_text="silvanocerza/bank-reader"
          technologies={["Python", "Django", "Scrapy", "Lua", "Vue.js"]}
        />
        <Project
          name="Cute Code Accessor"
          icon="fa-brands fa-github"
          link="https://github.com/silvanocerza/CuteCodeAccess"
          link_text="silvanocerza/bank-reader"
          technologies={["C++", "Unreal Engine"]}
        />
        <Project
          name="Spectrum"
          icon="fa-brands fa-github"
          link="https://github.com/silvanocerza/spectrum"
          link_text="silvanocerza/spectrum"
          technologies={["Sass", "CSS", "Bulma", "Hugo"]}
        />
        <Project
          name="This resume"
          icon="fa-brands fa-github"
          link="https://github.com/silvanocerza/resume"
          link_text="silvanocerza/resume"
          technologies={["React", "Next.js", "TailwindCSS", "TypeScript"]}
        />
      </div>
    </div>
  );
}
