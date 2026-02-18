import {
  skills,
  projects,
  experiences,
} from "@/constants/data";
import { Button } from "./ui/button";
import React from "react";
import { ProjectSection } from "./project-section";
import { ContactForm } from "./contact-form";
import { ExperienceSection } from "./experience-section";

export function MainSection() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-3">
        I convert your digital vision into reality.
      </h1>
      <p className="text-md text-gray-500 mb-3">Full-Stack Developer</p>
      <div className="w-full h-[1px] bg-gray-200 dark:bg-gray-800"></div>
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-between  items-center mt-3">
        <div>
          <h3 className="text-md font-semibold">Kolkata, India</h3>
          <p className="text-sm text-gray-500 text-center sm:text-left">
            Location
          </p>
        </div>
        <div>
          <h3 className="text-md font-semibold">Freelancing</h3>
          <p className="text-sm text-gray-500 text-center sm:text-left ">
            Present
          </p>
        </div>
        <div>
          <h3 className="text-md font-semibold">10+ projects done</h3>
          <p className="text-sm text-gray-500 text-center sm:text-left">
            Projects
          </p>
        </div>
      </div>
      <h2 className="text-sm font-semibold my-3">-Full Stack-</h2>
      <SkillSets />
      <h2 className="text-2xl font-bold my-5" id="experience">
        Experiences
      </h2>
      <div className="flex flex-col gap-2">
        {experiences.map((experience, index) => (
          <ExperienceSection key={index} experience={experience} />
        ))}
      </div>
      <h2 className="text-2xl font-bold my-5" id="projects">
        Latest Projects
      </h2>
      <div className="flex flex-col gap-4">
        {projects.map((project, index) => (
          <ProjectSection
            key={index}
            title={project.title}
            description={project.description}
            url={project.url}
          />
        ))}
      </div>
      <h2 className="text-2xl font-bold my-5" id="contact">
        Contact
      </h2>
      <ContactForm />
    </>
  );
}

export function SkillSets() {
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {skills.map((skill, index) => (
        <Button
          key={index}
          variant={"outline"}
          className="flex gap-1"
          size={"sm"}
        >
          <skill.icon size={15} />
          {skill.name}
        </Button>
      ))}
    </div>
  );
}
