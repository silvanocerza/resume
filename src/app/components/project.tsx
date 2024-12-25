import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tag from "@/app/components/tag";
import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type ProjectProps = {
  name: string;
  icon: IconProp;
  link: string;
  link_text: string;
  technologies: string[];
  children?: React.ReactNode;
};

export function Project({
  name,
  icon,
  link,
  link_text,
  technologies,
  children,
}: ProjectProps) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between text-lg antialiased">
        <h4 className="font-bold">{name}</h4>
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

      <div className="flex flex-wrap gap-x-2">
        {technologies.map((tech: string) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>
    </div>
  );
}
