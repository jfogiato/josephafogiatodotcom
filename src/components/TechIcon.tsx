"use client";

interface TechIconProps {
  name: string;
  techUrl: string;
  icon: React.ElementType;
}

export default function TechIcon({ name, techUrl, icon: Icon }: TechIconProps) {
  return (
    <a href={techUrl} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center">
      <Icon alt={name} className="w-10 h-10 text-white hover:scale-110 transition" />
    </a>
  );
}