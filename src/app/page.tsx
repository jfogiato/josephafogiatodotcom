import { BriefcaseIcon, AtSymbolIcon } from "@heroicons/react/24/outline";

const basePath = process.env.NODE_ENV === "production" ? "/josephafogiatodotcom" : "";

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-between min-h-screen p-8 sm:p-20 text-white"
      style={{
        backgroundImage: `url('${basePath}/images/basketball_hoop_film.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Empty spacer to push content down */}
      {/* <div className="flex-1" /> */}

      <h1 className="text-4xl sm:text-6xl font-bold">Joseph A. Fogiato</h1>

      <footer className="flex gap-6 flex-wrap items-center justify-center py-6 bg-black/25git  backdrop-blur-sm px-4 rounded-md">
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
