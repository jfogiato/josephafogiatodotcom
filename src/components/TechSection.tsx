"use client";
import TechIcon from "./TechIcon";

interface TechSectionProps {
  title: string;
  subtitle: string;
  technologies: { name: string; techUrl: string; icon: React.ElementType }[];
}

export default function TechSection({
  title,
  subtitle,
  technologies,
}: TechSectionProps) {
  return (
    <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-3 shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-1">{title}</h2>
      <p className="text-sm text-center mb-4">{subtitle}</p>
      <div className="flex flex-wrap justify-center gap-6">
        {technologies.map((tech, index) => (
          <TechIcon
            key={index}
            name={tech.name}
            techUrl={tech.techUrl}
            icon={tech.icon}
          />
        ))}
      </div>
    </div>
  );
}
