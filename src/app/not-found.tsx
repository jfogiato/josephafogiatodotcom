import Header from "@/components/Header";
import { pages } from "@/data/pages";
import Link from "next/link";
import { ShellIcon } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center min-h-screen max-h-screen bg-white text-black dark:bg-black dark:text-white">
      {/* Header Component */}
      <Header currentPath="/404" pages={pages} />

      {/* Main Content */}
      <div className="max-w-3xl w-full mt-3 flex flex-col items-center text-center">
        {/* Spooky Ghost Icon */}
        <ShellIcon className="w-20 h-20 text-gray-500 dark:text-gray-300 animate-spin" />

      {/* Existential Crisis Section */}
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-5xl font-bold mt-4 mb-10 w-full max-w-[80%] min-w-[70%] text-center">This page doesn't exist.</h1>
        <h2 className="text-3xl font-bold mt-4 w-full max-w-[70%] min-w-[60%] text-center">Does anything really exist?</h2>
        <h3 className="text-2xl font-bold mt-4 w-full max-w-[60%] min-w-[50%] text-center">Do I even really exist?</h3>
        <h4 className="text-xl font-bold mt-4 w-full max-w-[50%] min-w-[40%] text-center">Do you even really exist?</h4>
        <h5 className="text-l font-bold mt-4 w-full max-w-[35%] min-w-[30%] text-center">What's worth living for?</h5>
        <h6 className="text-m font-bold mt-4 w-full max-w-[35%] min-w-[25%] text-center">What's worth dying for?</h6>
        <p className="text-s font-bold mt-4 w-full max-w-[25%] min-w-[15%] text-center">How do we exist among such pain?</p>
        <p className="text-xs font-bold mt-4 w-full max-w-[15%] min-w-[8%] text-center">How do we go on?</p>
        <p className="text-xs font-bold mt-4 w-full max-w-[8%] min-w-[5%] text-center">Will it ever stop?</p>
      </div>

        {/* Navigation */}
        <div className="flex flex-col items-center mt-10 text-gray-600 dark:text-gray-400">
          Go somewhere else.
          <div className="flex gap-4 mt-3">
            <Link
              href="/"
              className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-lg shadow-md hover:bg-gray-800 dark:hover:bg-gray-300 transition"
            >
              Home.
            </Link>
            <Link
              href="/whoami"
              className="px-4 py-2 border-2 border-black dark:border-white text-black dark:text-white rounded-lg shadow-md hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            >
              Who I am.
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}