import Header from "@/components/Header";
import PrintButton from "@/components/PrintButton";
import { techTiersAndSkills } from "@/data/technologies";
import { pages } from "@/data/pages";
import { jobs } from "@/data/jobs";
import { extras } from "@/data/extras";
import Link from "next/link";
import Image from "next/image";
import { FileIcon } from "lucide-react";

export default function WorkPage() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white text-black dark:bg-black dark:text-white p-8">
      <Header currentPath="/work" pages={pages} />

      <div className="font-bold text-center my-5">
        <h1 className="text-4xl sm:text-5xl">Joseph A. Fogiato</h1>
        <h2 className="text-l sm:text-xl italic mt-2">Philadelphia, PA</h2>
      </div>

      {/* Main Section */}
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT COLUMN */}
        <div className="space-y-8">
          {/* Summary */}
          <section>
            <h2 className="text-xl font-bold mb-2">Summary</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Technologist, generalist, builder. I&apos;ve worked across
              nonprofits, startups, and corporate retail to build tools, fix
              systems, and empower folks to do their best work. I believe in
              good design, good documentation, and being a good human.
            </p>
            <br />
            <p className="text-sm text-gray-700 dark:text-gray-300">
              I don&apos;t think titles are entirely relevant, but my most
              recent one is `&quot;`Senior Manager of Technology and Continuous
              Improvement`&quot;`.
            </p>
          </section>

          {/* Skills */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              <a href="/software" className="hover:underline">
                Skills
              </a>
            </h2>

            {/* Technical Skills */}
            <div className="mb-4">
              <h3 className="text-m font-small mb-2">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {techTiersAndSkills.flatMap((tier) =>
                  tier.technologies.map(({ name, icon: Icon, techUrl }) => (
                    <a
                      key={name}
                      href={techUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-2 py-1 text-xs rounded bg-white/10 hover:bg-white/20 transition"
                    >
                      <Icon className="w-4 h-4" />
                      {name}
                    </a>
                  )),
                )}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-m font-small mb-2">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Communicating change.",
                  "Helping others understand the mental model.",
                  "Relentless problem solving.",
                  "Persisting through ambiguity.",
                  "Stakeholder management.",
                  "Building trust and consensus.",
                  "Asking the right questions.",
                  "Understanding why.",
                  "Doing the right thing.",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs rounded bg-white/10 max-w-[8rem] text-wrap break-words"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <section>
            <h2 className="text-xl font-bold mb-2">Education</h2>
            <div className="text-sm text-gray-700 dark:text-gray-300">
              <p className="font-semibold">
                <Link href="https://turing.edu" className="hover:underline">
                  Turing School of Software & Design
                </Link>
              </p>
              <p className="italic text-xs">
                ↳ Software Engineering · 2022–2023
              </p>
            </div>
            <br />
            <div className="text-sm text-gray-700 dark:text-gray-300">
              <p className="font-semibold">
                <Link href="https://www.pitt.edu" className="hover:underline">
                  The University of Pittsburgh
                </Link>
              </p>
              <p className="italic text-xs">
                ↳ BSBA; Supply Chain Management, Marketing · 2011–2015
              </p>
            </div>
          </section>

          {/* Volunteer / Extracurriculars */}
          <section>
            <h2 className="text-xl font-bold mb-2">
              Volunteer & Extracurriculars
            </h2>

            {extras.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 mb-4 text-sm text-gray-700 dark:text-gray-300"
              >
                <Image
                  src={item.image}
                  alt={`${item.organization} Logo`}
                  width={24}
                  height={24}
                  className="rounded-sm mt-[2px]"
                />
                <div>
                  <p className="font-semibold">
                    <Link
                      href={item.link}
                      className="hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.organization}
                    </Link>
                    <span className="ml-1 italic text-xs"> · {item.role}</span>
                  </p>
                  <p className="text-xs">{item.description}</p>
                </div>
              </div>
            ))}
          </section>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-bold mb-4">Experience</h2>

            <div className="space-y-6">
              {jobs.map((job, index) => (
                <div key={index}>
                  <div className="flex items-center gap-2">
                    <Image
                      src={job.logo}
                      alt={`${job.organization} Logo`}
                      width={30}
                      height={30}
                    />
                    <h3 className="font-semibold text-lg">
                      <Link href={job.link} className="hover:underline">
                        {job.organization}
                      </Link>
                    </h3>
                  </div>
                  <p className="text-sm italic text-gray-500 dark:text-gray-400">
                    {job.location} · {job.date}
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 mt-1 space-y-1">
                    {job.responsibilities.map((line, i) => (
                      <li key={i} className="pl-5 -indent-5">
                        {line}
                      </li>
                    ))}
                  </ul>

                  {job.filesAndLinks && job.filesAndLinks.length > 0 && (
                    <div className="mt-3 pl-5 space-y-1 no-print">
                      {job.filesAndLinks.map((file, j) => (
                        <a
                          key={j}
                          href={file.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 flex items-center gap-1 hover:underline"
                        >
                          <FileIcon className="w-4 h-4" aria-hidden />
                          {file.description || file.path}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <PrintButton />
    </div>
  );
}
