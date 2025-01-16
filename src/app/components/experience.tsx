import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tag from "@/app/components/tag";
import React from "react";

export type ExperienceProps = {
  name: string;
  link: string;
  link_text: string;
  technologies: string[];
  start_date: string;
  end_date?: string;
  children?: React.ReactNode;
};

export function Experience({
  name,
  link,
  link_text,
  technologies,
  start_date,
  end_date,
  children,
}: ExperienceProps) {
  return (
    <div className="flex flex-col print:break-inside-avoid">
      <div className="flex justify-between text-lg antialiased">
        <h4 className="font-bold">{name}</h4>
        <p className="font-extrabold text-gray-300 whitespace-nowrap">
          {start_date} - {end_date || "Present"}
        </p>
      </div>

      <a
        className="text-gray-700 underline hover:text-red-500 w-fit"
        href={link}
      >
        <FontAwesomeIcon icon={["fas", "globe"]} className="fa-fw" />{" "}
        {link_text}
      </a>
      <div className="pb-1 pt-1 text-justify whitespace-pre-wrap">
        {children}
      </div>

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech: string) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>
    </div>
  );
}
