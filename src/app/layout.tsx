import type { Metadata } from "next";
import Download from "@/app/ui/download";
import "./globals.css";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { faGlobe, faAt, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faBluesky,
  faLinkedin,
  faMastodon,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;
library.add(faGlobe, faAt, faFilePdf);
library.add(faGithub, faBluesky, faLinkedin, faMastodon, faYoutube);

const metadataBase = process.env.CONTEXT
  ? ({
      production: process.env.URL,
      "branch-deploy": process.env.DEPLOY_PRIME_URL,
      "deploy-preview": process.env.DEPLOY_PRIME_URL,
    }[process.env.CONTEXT] ?? "")
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(metadataBase),
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
