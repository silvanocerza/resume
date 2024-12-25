import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type SocialLinkProps = {
  icon: IconProp;
  link: string;
  link_text: string;
};

export function SocialLink({ icon, link, link_text }: SocialLinkProps) {
  return (
    <div className="p-1 pt-0 pb-0">
      <a
        href={link}
        className="underline text-nowrap antialiased hover:text-red-600"
      >
        <FontAwesomeIcon icon={icon} className="fa-fw" /> {link_text}
      </a>
    </div>
  );
}
