"use client";
import TechIcon from "./TechIcon";

interface TechSectionProps {
  title: string;
  technologies: { name: string; techUrl: string; icon: React.ElementType }[];
}

export default function TechSection({ title, technologies }: TechSectionProps) {
  return (
    <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-2">{title}</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {technologies.map((tech, index) => (
          <TechIcon key={index} name={tech.name} techUrl={tech.techUrl} icon={tech.icon} />
        ))}
      </div>
    </div>
  );
}