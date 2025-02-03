import { BriefcaseIcon, AtSymbolIcon, FilmIcon } from "@heroicons/react/24/outline";
import { CroissantIcon, CableCarIcon, CrownIcon, PartyPopperIcon, SunriseIcon, WavesIcon, TreePalmIcon, ScanFaceIcon, BellIcon } from "lucide-react";
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
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-4xl sm:text-6xl font-bold">Joseph A. Fogiato</h1>

        {/* Navigation */}
        <div className="flex flex-row items-center gap-4">
          {[
            { href: "/film", icon: FilmIcon, label: "Film" },
            { href: "/france", icon: CroissantIcon, label: "France" },
            { href: "/germany", icon: CableCarIcon, label: "Germany" },
            { href: "/england", icon: CrownIcon, label: "England" },
            { href: "/mummers", icon: PartyPopperIcon, label: "Mummers" },
            { href: "/climate_strike", icon: SunriseIcon, label: "Climate Strike" },
            { href: "/colombia", icon: WavesIcon, label: "Colombia" },
            { href: "/hawaii", icon: TreePalmIcon, label: "Hawaii" },
            { href: "/faces", icon: ScanFaceIcon, label: "Faces" },
            { href: "/philly", icon: BellIcon, label: "Philly" },
          ].map(({ href, icon: Icon, label }) => (

            <Link key={href} href={href} className="relative group">
              <Icon className="w-10 h-10 text-white group-hover:scale-110 transition" />
              {/* Tooltip for each icon */}
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-10 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
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