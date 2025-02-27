import { SiNextdotjs, SiJavascript, SiPython, SiTailwindcss, SiReact, SiElixir, SiPostgresql, SiCypress, SiTypescript, SiRubyonrails, SiPhoenixframework } from "react-icons/si";
import { PiMicrosoftExcelLogoLight } from "react-icons/pi";
import { BiLogoMicrosoft } from "react-icons/bi";

export const techTiersAndSkills = [
  {
    title: "Tinkerer.",
    subtitle: "I've futzed around with these.",
    technologies: [
      { name: "PostgreSQL", icon: SiPostgresql, techUrl: "https://www.postgresql.org/" },
      { name: "Python", icon: SiPython, techUrl: "https://www.python.org/" },
      { name: "Ruby on Rails", icon: SiRubyonrails, techUrl: "https://rubyonrails.org/" },
    ],
  },
  {
    title: "Builder.",
    subtitle: "I've built working modules with these.",
    technologies: [
      { name: "Tailwind CSS", icon: SiTailwindcss, techUrl: "https://tailwindcss.com/" },
      { name: "Elixir", icon: SiElixir, techUrl: "https://elixir-lang.org/" },
      { name: "Phoenix", icon: SiPhoenixframework, techUrl: "https://www.phoenixframework.org/" },
      { name: "Cypress", icon: SiCypress, techUrl: "https://www.cypress.io/" },
      { name: "TypeScript", icon: SiTypescript, techUrl: "https://www.typescriptlang.org/" },
      { name: "Next.js", icon: SiNextdotjs, techUrl: "https://nextjs.org/" },
    ],
  },
  {
    title: "OG.",
    subtitle: "I can walk into a codebase and get up to speed quickly with these - and yes, Excel counts.",
    technologies: [
      { name: "React", icon: SiReact, techUrl: "https://reactjs.org/" },
      { name: "JavaScript", icon: SiJavascript, techUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "Excel", icon: PiMicrosoftExcelLogoLight, techUrl: "https://support.microsoft.com/en-us/excel" },
      { name: "Power Automate", icon: BiLogoMicrosoft, techUrl: "https://powerautomate.microsoft.com/" },
      { name: "Power Apps", icon: BiLogoMicrosoft, techUrl: "https://powerapps.microsoft.com/" },
    ],
  },
];