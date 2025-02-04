"use client";

import Header from "@/components/Header";
import ProjectSection from "@/components/ProjectSection";
import { pages } from "@/data/pages";

export default function SoftwarePage() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-8">

      <Header currentPath="/software" pages={pages} />

      <h1 className="text-4xl font-bold mb-6">Software Projects</h1>

      {/* Projects */}
      <div className="w-full max-w-4xl space-y-4">
        <ProjectSection
          title="This site."
          description="Just me."
          images={[
          ]}
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
        <ProjectSection
          title="Beam"
          description="Be Well."
          images={[
            "/images/beam1.gif",
            "/images/beam2.gif",
          ]}
          githubUrl="https://github.com/espressoGoddess/beam"
          liveUrl="https://beam-pearl.vercel.app/"
          bgColor="#B4B7DE"
        />
      </div>
    </div>
  );
}