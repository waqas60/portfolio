import React from "react";
import ExperienceCard, { ExperienceCardProps } from "./ExperienceCard";

const experiences: ExperienceCardProps[] = [
  {
    imageUrl: "/devsinc.svg",
    role: "Backend Developer",
    company: "Tech Solutions Inc.",
    duration: "Jan 2020 - Dec 2021",
  },
  {
    imageUrl: "/devsinc.svg",
    role: "Backend Developer",
    company: "Tech Solutions Inc.",
    duration: "Jan 2020 - Dec 2021",
  },
  {
    imageUrl: "/devsinc.svg",
    role: "Backend Developer",
    company: "Tech Solutions Inc.",
    duration: "Jan 2020 - Dec 2021",
  },
];

export default function Experience() {
  return (
    <div className="mb-20">
      <div>
        <h1 className="text-4xl font-bold text-neutral-800">Experience</h1>
      </div>

      <div className="my-8 grid grid-cols-1 gap-4">
        {experiences.map((experience, index) => {
          return (
            <ExperienceCard
              key={index}
              imageUrl={experience.imageUrl}
              role={experience.role}
              company={experience.company}
              duration={experience.duration}
            />
          );
        })}
      </div>
    </div>
  );
}
