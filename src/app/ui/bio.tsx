import { SocialLink, SocialLinkProps } from "@/app/components/social-link";
import { config } from "@/app/lib/utils";

function createSocialLink(social: SocialLinkProps) {
  return (
    <SocialLink
      key={social.link}
      icon={social.icon}
      link={social.link}
      link_text={social.link_text}
    />
  );
}

export default function Bio() {
  const { socials, bio }: { socials: SocialLinkProps[]; bio: string } = config;
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
      <div className="flex flex-col gap-4">
        <p className="text-justify whitespace-pre-wrap">{bio}</p>
        <div className="flex flex-row flex-wrap justify-evenly">
          {socials.map(createSocialLink)}
        </div>
      </div>
    </div>
  );
}
