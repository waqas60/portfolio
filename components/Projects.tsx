import ProjectCard, { ProjectCardProps } from "./ProjectCard";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const projects: ProjectCardProps[] = [
  {
    title: "Diarycover",
    description:
      "A microblogging website which allows you to share your thoughts and connect with people around world",
    projectLink: "https://diarycover.vercel.app/",
    githubLink: "https://github.com/RITIK-KHARYA/diary",
    tagsName: ["NextJS", "TailwindCSS", "MongoDB"],
  },
  {
    title: "Diarycover",
    description:
      "A microblogging website which allows you to share your thoughts and connect with people around world",
    projectLink: "https://diarycover.vercel.app/",
    githubLink: "https://github.com/RITIK-KHARYA/diary",
    tagsName: ["NextJS", "TailwindCSS", "MongoDB"],
  },
  {
    title: "Diarycover",
    description:
      "A microblogging website which allows you to share your thoughts and connect with people around world",
    projectLink: "https://diarycover.vercel.app/",
    githubLink: "https://github.com/RITIK-KHARYA/diary",
    tagsName: ["NextJS", "TailwindCSS", "MongoDB"],
  },
];

export default function Projects() {
  return (
    <div className="my-20">
      <div>
        <h1 className="text-4xl font-bold text-neutral-800">Projects</h1>
      </div>
      <div className="my-8 grid grid-cols-2 gap-4">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              projectLink={project.projectLink}
              githubLink={project.githubLink}
              tagsName={project.tagsName}
            />
          );
        })}
      </div>

      <div className="mx-auto max-w-50 cursor-pointer rounded-md border border-neutral-300 px-2 py-4 text-sm shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-200 hover:scale-105">
        <Link href={"/projects"} className="flex justify-center gap-2 items-center">
          <p>Explore More Projects</p>
          <ChevronRight size={18} />
        </Link>
      </div>
    </div>
  );
}
