import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type TalkProps = {
  name: string;
  icon: IconProp;
  link: string;
  link_text: string;
  date: string;
  children?: React.ReactNode;
};

export function Talk({
  name,
  icon,
  link,
  link_text,
  date,
  children,
}: TalkProps) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between text-lg antialiased">
        <h4 className="font-bold">{name}</h4>
        <p className="font-extrabold text-gray-300 whitespace-nowrap">{date}</p>
      </div>

      <a
        className="text-gray-700 underline hover:text-red-500 w-fit"
        href={link}
      >
        <FontAwesomeIcon icon={icon} className="fa-fw" />
        {link_text}
      </a>
      <div className="pb-1 pt-1 text-justify  whitespace-pre-wrap">
        {children}
      </div>
    </div>
  );
}
