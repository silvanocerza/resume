import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Talk({
  name,
  icon,
  link,
  link_text,
  date,
  children,
}: {
  name: string;
  icon: string;
  link: string;
  link_text: string;
  date: string;
  children?: React.ReactElement | string;
}) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between text-lg antialiased">
        <h4 className="font-bold">{name}</h4>
        <p className="font-extrabold text-gray-300 whitespace-nowrap">{date}</p>
      </div>

      <a className="text-gray-700 underline hover:text-red-500" href={link}>
        <FontAwesomeIcon icon={icon} className="fa-fw" />
        {link_text}
      </a>
      <div className="pb-1 pt-1 text-justify">{children}</div>
    </div>
  );
}
