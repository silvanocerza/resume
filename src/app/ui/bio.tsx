export default function Bio() {
  return (
    <div>
      <div
        className="
        flex
        flex-col
        items-start
        text-4xl
        font-bold
        pb-2
        mb-2
        border-b-2
        border-green-600"
      >
        {/* This one is shown on non phone screens */}
        <h1 className="hidden sm:block">Silvano Cerza — Software Engineer</h1>
        {/* The one below instead is for phone screens */}
        <div className="flex sm:hidden flex-col">
          <h1 className="text-nowrap">Silvano Cerza</h1>
          <h1 className="text-nowrap">Software Engineer</h1>
        </div>
      </div>
      <div className="flex">
        <p>
          I enjoy working on different platforms, technologies and solving tough
          problems. I consider myself a generalist and am never scared to tackle
          a new challenge using unknown languages or technology. It’s something
          that I aim for since I believe it’s the best way to learn something
          new, and that every problem requires the right tool to be solved the
          best way possible. Some of the stuff I've done include CLIs in Go, web
          apps and Open Source frameworks in Python, desktop and mobile apps in
          Qt (C++ framework), Electron applications in Typescript and
          Clojure/Script, enhance and evolve CI/CD infrastructure on CircleCI
          and GitHub Workflows.
        </p>
      </div>
    </div>
  );
}
