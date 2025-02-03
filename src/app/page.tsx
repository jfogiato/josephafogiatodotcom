import { BriefcaseIcon, AtSymbolIcon, FilmIcon, GlobeEuropeAfricaIcon } from "@heroicons/react/24/outline";
import { CroissantIcon, CableCarIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-between min-h-screen p-8 sm:p-20 text-white"
      style={{
        backgroundImage: "url(/images/basketball_film.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center gap-4">
        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl font-bold">Joseph A. Fogiato</h1>

        <div className="flex flex-row items-center gap-4">
          <Link href="/film" className="hover:scale-110 transition">
            <FilmIcon className="w-10 h-10 text-white" />
          </Link>

          <Link href="/france" className="hover:scale-110 transition">
            <CroissantIcon className="w-10 h-10 text-white" />
          </Link>

          <Link href="/germany" className="hover:scale-110 transition">
            <CableCarIcon className="w-10 h-10 text-white" />
          </Link>'
        </div>
      </div>

      {/* Footer */}
      <footer className="flex gap-6 flex-wrap items-center justify-center py-6 bg-black/25 backdrop-blur-sm px-4 rounded-md">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white"
          href="https://www.linkedin.com/in/joseph-fogiato/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BriefcaseIcon className="w-5 h-5" aria-hidden />
          Professional
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white"
          href="mailto:joseph@fogiato.com"
        >
          <AtSymbolIcon className="w-5 h-5" aria-hidden />
          Email
        </a>
      </footer>
    </div>
  );
}