import { GithubIcon, AtSignIcon, BriefcaseBusinessIcon, } from "lucide-react";
import { pages } from "../data/pages";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-between min-h-screen p-8 sm:p-5 text-white"
      style={{
        backgroundImage: "url(/images/basketball_film.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center gap-3 ">
      <Link href="/whoami">
        <h1 className="text-4xl sm:text-5xl font-bold drop-shadow-xl hover:text-gray-200 transition">
          Joseph A. Fogiato
        </h1>
      </Link>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-4 max-w-[80%]">
          {pages.map(({ href, icon: Icon, label }) => (

            <Link key={href} href={href} className="relative group">
              <Icon className="w-8 h-8 group-hover:scale-110 transition" />
              {/* Tooltip for each icon */}
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-10 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                {label}
              </span>
            </Link>
            
          ))}
        </div>
      </div>

      <footer className="flex gap-6 flex-wrap items-center justify-center py-6 bg-black/25 backdrop-blur-sm px-4 rounded-md">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white"
          href="https://www.linkedin.com/in/joseph-fogiato/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BriefcaseBusinessIcon className="w-5 h-5" aria-hidden />
          Professional
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white"
          href="mailto:joseph@fogiato.com"
        >
          <AtSignIcon className="w-5 h-5" aria-hidden />
          Email
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white text-xs"
          href="https://github.com/jfogiato"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon className="w-5 h-5" aria-hidden />
          01000011 01001111 01000100 01000101
        </a>
      </footer>
    </div>
  );
}