import LinkFooter from "@/components/LinkFooter";
import { pages } from "../data/pages";
import Link from "next/link";
import BasketballButton from "@/components/BasketballButton";

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-between min-h-screen p-2 sm:p-3 text-white"
      style={{
        backgroundImage: "url(/images/photography/basketball_film.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center 45%",
      }}
    >
      <div className="flex flex-col items-center gap-2">
        <Link href="/whoami">
          <h1
            className="text-center text-5xl font-bold drop-shadow-xl transition hover:text-gray-200 hover:scale-105 hover: hover:underline-offset-4 mb-2"
            style={{
              animation: "jiggle 5s ease-in-out infinite",
              animationIterationCount: "infinite",
            }}
          >
            Joseph A. Fogiato.
          </h1>
        </Link>

        {/* Navigation */}
        <div
          className="flex flex-wrap justify-center gap-4 max-w-full sm:max-w-[80%]"
          id="home-page-links"
        >
          {/* Photo group */}
          {pages
            .filter(({ group }) => group === "photo")
            .map(({ href, icon: Icon, label }) => (
              <Link key={href} href={href} className="relative group">
                <Icon className="w-8 h-8 text-white group-hover:scale-110 transition" />
                <span className="absolute left-1/2 -translate-x-1/2 -bottom-10 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                  {label}
                </span>
              </Link>
            ))}

          {/* Divider */}
          <div className="w-full flex justify-center">
            <div className="w-full h-[2px] bg-[radial-gradient(circle,_white_1px,_transparent_1px)] bg-[length:6px_2px] bg-repeat-x opacity-60" />
          </div>

          {/* Professional group */}
          {pages
            .filter(({ group }) => group !== "photo")
            .map(({ href, icon: Icon, label }) => (
              <Link key={href} href={href} className="relative group">
                <Icon className="w-8 h-8 text-white group-hover:scale-110 transition" />
                <span className="absolute left-1/2 -translate-x-1/2 -bottom-10 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                  {label}
                </span>
              </Link>
            ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <BasketballButton />
        <LinkFooter />
      </div>
    </div>
  );
}
