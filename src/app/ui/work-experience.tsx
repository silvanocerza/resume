import Experience from "@/app/components/experience";

export default function WorkExperience() {
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
        Work Experience
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        <Experience
          name="Deepset"
          link="https://www.deepset.ai/"
          link_text="deepset.ai"
          start_date="Jan 2023"
          technologies={["Python", "GitHub Actions"]}
        >
          I'm part of the Core Team and one of the main developer of Haystack
          and related projects. Part of my time is also dedicated to all the
          stuff that managing an OS project like Haystack entails, like triaging
          community issues and giving support in the official community Discord.
          In my day to day work I develop new feature, squash bugs, enhance
          release, testing, and CI processes. I also closely collaborate with
          other companies engineers to integrate with their projects.
        </Experience>
        <Experience
          name="Pitch"
          link="https://pitch.com/"
          link_text="pitch.com"
          start_date="Apr 2022"
          end_date="Sep 2022"
          technologies={["Clojure", "ClojureScript", "Python", "CircleCI"]}
        >
          I was part of the DevOps team and focused on CI, release management
          and developers experience. Most of my time was spent enhancing and
          evolving our CircleCI infrastructure, making the release process
          leaner and easier to understand, building scripts and tools to enhance
          the day to day job of other developers. I also contributed in small
          parts to the main product application writing Clojure and
          ClojureScript.
        </Experience>
        <Experience
          name="Arduino"
          link="https://arduino.cc/"
          link_text="arduino.cc"
          start_date="Jul 2020"
          end_date="Mar 2022"
          technologies={["Golang", "Python", "TypeScript", "GitHub Actions"]}
        >
          I worked mainly on the ArduinoCLI, implementing new features, fixing
          bugs and writing tests. I also took part on other minor supporting
          projects for the ArduinoCLI like external libraries, GitHub Workflows
          Actions and similar things. Most of the times I managed the release
          process of the ArduinoCLI, from triggering the build process to
          communicating with marketing for social communications.
        </Experience>
        <div className="flex flex-col gap-4">
          <Experience
            name="Molecular Horizon"
            link="http://www.molhorizon.it/"
            link_text="molhorizon.it"
            start_date="Jul 2019"
            end_date="Jul 2020"
            technologies={["C++", "Qt", "QML", "Qt Quick", "GitHub Actions"]}
          />
          <Experience
            name="Evonove"
            link="https://evonove.it/"
            link_text="evonove.it"
            start_date="Feb 2015"
            end_date="Jul 2019"
            technologies={["Python", "Django", "C++", "Qt", "QML", "Qt Quick"]}
          />
        </div>
      </div>
    </div>
  );
}
