import LinkFooter from "@/components/LinkFooter";
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
          <h1
            className="text-center text-5xl font-bold drop-shadow-xl transition hover:text-gray-200 hover:scale-105 hover: hover:underline-offset-4"
            style={{
              animation: "jiggle 5s ease-in-out infinite",
              animationIterationCount: "infinite",
            }}
          >
            Joseph A. Fogiato.
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
      <LinkFooter />
    </div>
  );
}
