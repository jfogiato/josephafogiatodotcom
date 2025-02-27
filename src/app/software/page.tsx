"use client";

import { useState } from "react";
import Header from "@/components/Header";
import ProjectSection from "@/components/ProjectSection";
import TechSection from "@/components/TechSection";
import { pages } from "@/data/pages";
import { techTiersAndSkills } from "@/data/technologies";
import { ChevronDownIcon } from "lucide-react";


export default function SoftwarePage() {
  const [showProjects, setShowProjects] = useState(false);
  const [showTechnologies, setShowTechnologies] = useState(false);

  return (
    <div className="flex flex-col items-center min-h-screen text-black dark:bg-black dark:text-white p-8">

      <Header currentPath="/software" pages={pages} />

      <h1 className="text-4xl font-bold mb-6">Software.</h1>

      {/* Technologies Section */}
      <div className="w-full max-w-4xl mt-6">
        <button
          onClick={() => setShowTechnologies(!showTechnologies)}
          className="w-full flex justify-between items-center bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md text-left"
        >
          <h2 className="text-2xl font-semibold">Technologies.</h2>
          <ChevronDownIcon
            className={`w-6 h-6 transition-transform ${showTechnologies ? "rotate-180" : ""}`}
          />
        </button>
        
        {showTechnologies && (
          <div className="mt-4 space-y-8">
            {techTiersAndSkills.map((tier, index) => (
              <TechSection key={index} title={tier.title} technologies={tier.technologies} />
            ))}
          </div>
        )}
      </div>

      {/* Projects Section */}
      <div className="w-full max-w-4xl mt-6">
        <button
          onClick={() => setShowProjects(!showProjects)}
          className="w-full flex justify-between items-center bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md text-left"
        >
          <h2 className="text-2xl font-semibold">Projects.</h2>
          <ChevronDownIcon
            className={`w-6 h-6 transition-transform ${showProjects ? "rotate-180" : ""}`}
          />
        </button>

        {showProjects && (
          <div className="mt-4 space-y-4">
            <ProjectSection
              title="This site."
              description="Home grown using Next.js, Typescript, and Cypress (with some other odds and ends)."
              images={[]}
              githubUrl="https://github.com/jfogiato/josephafogiatodotcom"
              liveUrl="https://fogiato.com"
              bgColor="#a3a3c2"
            />
            <ProjectSection
              title="Do Something."
              description="A web app for finding things to do."
              images={[
                "/images/dosomething1.gif",
                "/images/dosomething2.gif",
                "/images/dosomething3.gif",
              ]}
              githubUrl="https://github.com/jfogiato/do-something"
              liveUrl="https://cmon-do-something.vercel.app/"
              bgColor="#dbbb8a"
            />
            <ProjectSection
              title="Collabria"
              description="The AI TA."
              images={[
                "/images/collabria1.gif",
                "/images/collabria2.gif",
                "/images/collabria3.gif",
              ]}
              githubUrl="https://github.com/jfogiato/collabria-fe"
              liveUrl="https://collabria.vercel.app/"
              bgColor="#fade52"
            />
            <ProjectSection
              title="Grand Budapest Hotel"
              description="A client management system fit for a Wes Anderson flick. Vanilla JS."
              images={[
                "/images/gbh1.gif",
                "/images/gbh2.gif",
                "/images/gbh3.gif",
              ]}
              githubUrl="https://github.com/jfogiato/overlook"
              liveUrl="https://jfogiato.github.io/overlook/"
              bgColor="#c78890"
            />
          </div>
        )}
      </div>
    </div>
  );
}