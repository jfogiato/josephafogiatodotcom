import Link from "next/link";
import { HomeModernIcon } from "@heroicons/react/24/outline";

interface HeaderProps {
  currentPath: string;
  pages: { href: string; icon: React.ElementType; label: string }[];
}

export default function Header({ currentPath, pages }: HeaderProps) {
  // Find current index
  const currentIndex = pages.findIndex((page) => page.href === currentPath);

  // Determine next page (loops back to first if at the last page)
  const nextIndex = (currentIndex + 1) % pages.length;
  const nextPage = pages[nextIndex];

  return (
    <div className="flex justify-between items-center w-full p-4 text-white fixed top-0 left-0 right-0 no-print">
      
      {/* Home Button */}
      <Link href="/" className="flex items-center gap-2 hover:text-gray-300 text-black dark:text-white">
        <HomeModernIcon className="w-6 h-6" />
      </Link>

      {/* Next Page Button */}
      <Link href={nextPage.href} className="flex items-center gap-2 hover:text-gray-300">
        <nextPage.icon className="w-6 h-6 text-black dark:text-white" />
      </Link>
    </div>
  );
}