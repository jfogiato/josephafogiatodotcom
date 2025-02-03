import Link from "next/link";
import { HomeModernIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="absolute top-4 left-4">
      <Link href="/" className="flex items-center gap-2 text-white hover:underline">
        <HomeModernIcon className="w-6 h-6" />
      </Link>
    </header>
  );
}