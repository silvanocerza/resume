import type { Metadata } from "next";
import Download from "@/app/ui/download";
import "./globals.css";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

// TODO: Add just the icons used when most of the other stuff is done
library.add(fas, fab);

export const metadata: Metadata = {
  title: "Silvano Cerza — Software Engineer",
  description:
    "Hey! I'm Silvano, a Software Engineer, and this is my resume. Feel free to take a look at it. :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          antialiased
          sm:bg-white
          md:bg-[#ededed]`}
      >
        <div className="flex flex-col">
          <Download />
          <div
            className="m-2
          box-border
          md:w-[21cm]
          md:max-w-[21cm]
          mx-auto
          p-8
          bg-white
          md:shadow-[0px_0px_10px_10px_#C0C0C0]
          text-base
          leading-tight
          print:shadow-none
          print:p-0"
          >
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
