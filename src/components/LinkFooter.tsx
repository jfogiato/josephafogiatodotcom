import {
  GithubIcon,
  AtSignIcon,
  LinkedinIcon,
  InstagramIcon,
} from "lucide-react";

const links = [
  {
    href: "https://www.linkedin.com/in/joseph-fogiato/",
    icon: LinkedinIcon,
    label: "Professional.",
  },
  {
    href: "mailto:joseph@fogiato.com",
    icon: AtSignIcon,
    label: "Email.",
  },
  {
    href: "https://github.com/jfogiato",
    icon: GithubIcon,
    label: "Code.",
  },
  {
    href: "https://www.instagram.com/alrightsrsrvd/",
    icon: InstagramIcon,
    label: "Personal.",
  },
];

export default function LinkFooter() {
  return (
    <footer className="grid grid-cols-2 gap-6 justify-items-center py-6 px-4 rounded-md bg-black/25 backdrop-blur-sm sm:w-[17vw] w-[25vw]">
      {links.map(({ href, icon: Icon, label }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
        >
          <Icon className="w-6 h-6 text-white transition-transform group-hover:scale-110" />

          <span className="absolute left-1/2 -translate-x-1/2 -bottom-8 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
            {label}
          </span>
        </a>
      ))}
    </footer>
  );
}
