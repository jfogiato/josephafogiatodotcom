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
              title="Integration Hub"
              description="This one is my baby - A modular integration platform to connect various third-party services and APIs, enabling seamless data flow and automation for delivering medically tailored meals. Complete with a smart referral portal, client-facing meal selection module, and much much more!"
              images={[
                "/images/software/ihub_demo.gif",
                "/images/software/ihub8.png",
                "/images/software/ihub6.png",
                "/images/software/ihub3.png",
                "/images/software/ihub4.png",
                "/images/software/ihub5.png",
                "/images/software/ihub7.png",
              ]}
              githubUrl="https://github.com/jfogiato/"
              liveUrl="https://ihub.mannapa.org"
              bgColor="#012f45"
              technologiesUsed={[
                "Elixir",
                "Phoenix",
                "PostgreSQL",
                "Tailwind CSS",
                "Fly.io",
                "Oban",
                "Swoosh",
              ]}
            />
            <ProjectSection
              title="Wedding Website"
              description="A full-featured wedding website for our Fall 2026 celebration. Features a complete RSVP system with household management, email campaigns (invitations, confirmations, reminders), photo galleries, travel & lodging information, and a comprehensive admin panel. Built with a custom design system featuring a rustic chic aesthetic with mid-century modern influences."
              images={[
                "/images/software/wedding1.png",
                "/images/software/wedding2.png",
                "/images/software/wedding3.png",
                "/images/software/wedding4.png",
                "/images/software/wedding5.png",
                "/images/software/wedding6.png",
                "/images/software/wedding7.png",
                "/images/software/wedding8.png",
                "/images/software/wedding9.png",
                "/images/software/wedding10.png",
              ]}
              githubUrl="https://github.com/jfogiato/"
              liveUrl="https://wedding.fogiato.com"
              bgColor="#c2703a"
              technologiesUsed={[
                "Elixir",
                "Phoenix",
                "LiveView",
                "PostgreSQL",
                "Tailwind CSS",
                "Fly.io",
                "Oban",
                "Swoosh",
                "Resend",
              ]}
            />
            <ProjectSection
              title="Creepy Crawlie Cinema Club"
              description="A web app for my friends and I to track and watch movies together, complete with a weekly automated mailer to choose a random move for us."
              images={[
                "/images/software/cccc.gif",
                "/images/software/cccc_logo.png",
              ]}
              githubUrl="https://github.com/jfogiato/creepy_crawlie_cinema_club"
              liveUrl="https://creepycrawlie.fogiato.com/"
              bgColor="#55356a"
              technologiesUsed={[
                "Elixir",
                "Phoenix",
                "PostgreSQL",
                "Tailwind CSS",
                "Fly.io",
                "Oban",
                "Swoosh",
              ]}
            />
            <ProjectSection
              title="This site."
              description="Home grown using Next.js, Typescript, and Cypress (with some other odds and ends)."
              images={[]}
              githubUrl="https://github.com/jfogiato/josephafogiatodotcom"
              liveUrl="https://fogiato.com"
              bgColor="#a3a3c2"
              technologiesUsed={[
                "Next.js",
                "Typescript",
                "Tailwind CSS",
                "Cypress",
                "Vercel",
              ]}
            />
            <ProjectSection
              title="Do Something."
              description="A web app for finding things to do."
              images={[
                "/images/software/dosomething1.gif",
                "/images/software/dosomething2.gif",
                "/images/software/dosomething3.gif",
              ]}
              githubUrl="https://github.com/jfogiato/do-something"
              liveUrl="https://cmon-do-something.vercel.app/"
              bgColor="#dbbb8a"
              technologiesUsed={[
                "React",
                "Typescript",
                "Tailwind CSS",
                "Vercel",
                "Cypress",
              ]}
            />
            <ProjectSection
              title="Collabria"
              description="The AI TA."
              images={[
                "/images/software/collabria1.gif",
                "/images/software/collabria2.gif",
                "/images/software/collabria3.gif",
              ]}
              githubUrl="https://github.com/jfogiato/collabria-fe"
              liveUrl="https://collabria.vercel.app/"
              bgColor="#eac71bff"
              technologiesUsed={[
                "React",
                "Typescript",
                "Tailwind CSS",
                "Vercel",
                "Cypress",
              ]}
            />
            <ProjectSection
              title="Grand Budapest Hotel"
              description="A client management system fit for a Wes Anderson flick. Vanilla JS."
              images={[
                "/images/software/gbh1.gif",
                "/images/software/gbh2.gif",
                "/images/software/gbh3.gif",
              ]}
              githubUrl="https://github.com/jfogiato/overlook"
              liveUrl="https://jfogiato.github.io/overlook/"
              bgColor="#c78890"
              technologiesUsed={["Javascript", "HTML", "CSS", "Mocha", "Chai"]}
            />
          </div>
        )}
      </div>

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
              <TechSection
                key={index}
                title={tier.title}
                subtitle={tier.subtitle}
                technologies={tier.technologies}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
