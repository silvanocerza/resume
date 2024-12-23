import Project from "@/app/components/project";

export default function WorkProjects() {
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
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        <Project
          name="Haystack"
          icon="fa-brands fa-github"
          link="https://github.com/deepset-ai/haystack"
          link_text="/deepset-ai/haystack"
          technologies={["Python", "GitHub Actions"]}
        >
          Haystack is an Open Source LLM framework that allows you to build
          applications powered by LLMs, Transformer models, vector search and
          more.
          <br />
          I'm one of the main developers. I took part in a major rewrite of the
          project and heavily influenced architectural and design decisions.
        </Project>
        <Project
          name="Arduino CLI"
          icon="fa-brands fa-github"
          link="https://github.com/arduino/arduino-cli"
          link_text="/arduino/arduino-cli"
          technologies={["Golang", "Python", "gRPC", "Protobuf"]}
        >
          Arduino CLI is a command line tool written in Go, it's used to manage
          and install libraries, the tools necessary to compile and upload to
          different Arduino boards, and several other things.
          <br />
          Among its features it's also the backbone of the new Arduino IDE,
          using a gRPC interface to communicate with each other.{" "}
        </Project>

        <Project
          name="Arduino IDE 2"
          icon="fa-brands fa-github"
          link="https://github.com/arduino/arduino-ide"
          link_text="/arduino/arduino-ide"
          technologies={["Node", "Electron", "React", "TypeScript", "Theia"]}
        >
          Arduino IDE 2 is the new version of the famous Arduino IDE used by
          millions of makers around the world.
          <br />
          The new version has been rewritten from scratch using Electron and the
          Theia framework. It uses the Arduino CLI internally to implement most
          of its features.
          <br />I implemented some minor feature, fix existing bugs, and handled
          integration of new functionalities from the Arduino CLI.
        </Project>

        <Project
          name="Kibitzer"
          icon="fa-solid fa-globe"
          link="http://www.moldiscovery.com/software/moka/"
          link_text="moldiscovery.com/software/moka"
          technologies={["C", "C++", "Qt", "QML", "Qt Quick"]}
        >
          Kibitzer is a desktop app to train computational models used to
          predict molecules' pKa values.
          <br />I integrated several C and C++ libraries in a multi threaded
          model to parallelize their execution to speed up the statistical
          computation for a better user experience.
        </Project>

        <Project
          name="Qnite"
          icon="fa-brands fa-github"
          link="https://github.com/evonove/qnite/"
          link_text="/evonove/qnite/"
          technologies={["C++", "Qt", "QML", "Qt Quick"]}
        >
          An open source library to create charts declaratively in QML.
          <br />I contributed by adding several features like charts zoom and
          bug fixing.
        </Project>

        <Project
          name="MKM SDK"
          icon="fa-brands fa-github"
          link="https://github.com/silvanocerza/mkm-sdk/"
          link_text="/silvanocerza/mkm-sdk"
          technologies={["Python", "OAuth"]}
        >
          An open source SDK for Magic Card Market, uses reflection to
          dinamically resolve the API endpoints.
        </Project>
      </div>
    </div>
  );
}
