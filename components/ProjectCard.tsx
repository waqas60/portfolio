import {  Github, LucideArrowUpRight } from "lucide-react";
import Link from "next/link";

export type ProjectCardProps = {
  title: string;
  description: string;
  projectLink: string;
  githubLink: string;
  tagsName: string[];
};

export default function ProjectCard({
  title,
  description,
  projectLink,
  githubLink,
  tagsName,
}: ProjectCardProps) {
  return (
    <div>
      <div className="flex flex-col gap-4 rounded-xl border border-neutral-300 px-6 py-6 hover:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] hover:scale-3d">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-2xl font-semibold text-neutral-800">
            <Link href={projectLink} target="_blank">
              {title}
            </Link>
          </h1>

          <div className="flex items-center gap-4">
            <Link href={projectLink} target="_blank">
              <LucideArrowUpRight size={18} className="cursor-pointer" />
            </Link>
            <Link href={githubLink} target="_blank">
              <Github size={18} className="cursor-pointer" />
            </Link>
          </div>
        </div>
        <div>
          <p className="cursor-pointer text-base">{description}</p>
        </div>

        <div className="flex items-center gap-2">
          {tagsName.map((tag, index) => {
            return (
              <span key={index} className="rounded-full p-2 text-xs italic">
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
