import Image from "next/image";

interface ProjectCardProps {
  src: string;
}

export default function ProjectCard({ src }: ProjectCardProps) {
  return (
    <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg">
      <Image
        src={src}
        alt="Project Preview"
        width={300}
        height={200}
        className="object-cover w-full h-full"
      />
    </div>
  );
}
