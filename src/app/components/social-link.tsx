import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialLink({
  icon,
  link,
  link_text,
}: {
  icon: string;
  link: string;
  link_text: string;
}) {
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
