"use client";

import { useState } from "react";
import Header from "@/components/Header";
import ProjectSection from "@/components/ProjectSection";
import { pages } from "@/data/pages";
import { ChevronDownIcon } from "lucide-react";
import { PiMicrosoftExcelLogoLight } from "react-icons/pi";
import { BiLogoMicrosoft } from "react-icons/bi";
import { SiNextdotjs, SiJavascript, SiPython, SiTailwindcss, SiReact, SiElixir, SiPostgresql, SiCypress, SiTypescript, SiRubyonrails } from "react-icons/si";

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
            {/* 🚀 Tinkerer (Beginner) */}
            <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold text-center mb-4">Tinkerer.</h2>
              <div className="flex flex-wrap justify-center gap-6">
                <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer">
                  <SiPostgresql className="w-10 h-10 text-white hover:scale-110 transition" />
                </a>
                <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
                  <SiPython className="w-10 h-10 text-white hover:scale-110 transition" />
                </a>
                <a href="https://rubyonrails.org/" target="_blank" rel="noopener noreferrer">
                  <SiRubyonrails className="w-10 h-10 text-white hover:scale-110 transition" />
                </a>
              </div>
            </div>

            {/* ⚡ Builder (Intermediate) */}
            <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold text-center mb-4">Builder.</h2>
              <div className="flex flex-wrap justify-center gap-6">
                <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
                  <SiTailwindcss className="w-10 h-10 text-white hover:scale-110 transition" />
                </a>
                <a href="https://elixir-lang.org/" target="_blank" rel="noopener noreferrer">
                  <SiElixir className="w-10 h-10 text-white hover:scale-110 transition" />
                </a>
                <a href="https://www.cypress.io/" target="_blank" rel="noopener noreferrer">
                  <SiCypress className="w-10 h-10 text-white hover:scale-110 transition" />
                </a>
              </div>
            </div>

            {/* 🧙 Wizard (Proficient) */}
            <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold text-center mb-4">Wizard.</h2>
              <div className="flex flex-wrap justify-center gap-6">
                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                  <SiReact className="w-10 h-10 text-white hover:scale-110 transition" />
                </a>
                <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                  <SiNextdotjs className="w-10 h-10 text-white hover:scale-110 transition" />
                </a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
                  <SiJavascript className="w-10 h-10 text-white hover:scale-110 transition" />
                </a>
                <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
                  <SiTypescript className="w-10 h-10 text-white hover:scale-110 transition" />
                </a>
                <a href="https://support.microsoft.com/en-us/excel" target="_blank" rel="noopener noreferrer">
                  <PiMicrosoftExcelLogoLight className="w-10 h-10 text-white hover:scale-110 transition" />
                </a>
                <a href="https://powerautomate.microsoft.com/" target="_blank" rel="noopener noreferrer">
                  <BiLogoMicrosoft className="w-10 h-10 text-white hover:scale-110 transition" />
                </a>
                <a href="https://powerapps.microsoft.com/" target="_blank" rel="noopener noreferrer">
                  <BiLogoMicrosoft className="w-10 h-10 text-white hover:scale-110 transition" />
                </a>
              </div>
            </div>
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
              description="Just me."
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