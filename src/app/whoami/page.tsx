import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import { pages } from "@/data/pages";
import { LayoutListIcon } from "lucide-react";

export default function AboutMe() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white text-black dark:bg-black dark:text-white p-8">
      {/* Header Component */}
      <Header currentPath="/whoami" pages={pages} />

      {/* Main Content */}
      <div className="max-w-3xl w-full mt-16">
        {/* Headshot */}
        <div className="flex justify-center mb-6">
          <div className="w-[70vw] max-w-[500px]">
            <Image
              src="/images/misc/me1.JPG"
              alt="Joseph A. Fogiato"
              width={600}
              height={600}
              className="rounded-2xl shadow-lg object-cover w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-4">Who Am I?</h1>

        {/* About Me Text */}
        <div className="flex flex-col text-lg text-gray-700 dark:text-gray-300 mt-8">
          <p className="ml-0">
            Joseph A. Fogiato <i>(/fudge-auto/)</i>, but it&apos;s just
            &quot;Joe&quot;.
          </p>
          <br />

          <p className="ml-6">
            I&apos;ve had a few careers but currently work at{" "}
            <a
              href="https://mannapa.org/"
              className="opacity-90 hover:opacity-100 transition"
            >
              MANNA,
            </a>{" "}
            where I direct all things tech.
          </p>
          <br />

          <p className="ml-12 text-right">
            I am an unapologetic humanist who believes that healthcare, repro
            freedom, queer rights, food, shelter, and human connection are human
            rights. If it&apos;s oppressive, it&apos;s morally abhorrent.
          </p>
          <br />
          <p className="ml-12 text-right">
            I have a{" "}
            <span className="relative inline-block">
              <span className="peer cursor-pointer transition">
                wonderful partner
              </span>
              <Image
                src="/images/misc/caro.png"
                alt="Caroline"
                width={120}
                height={120}
                className="absolute top-full left-[calc(100%-10rem)] rounded shadow-lg opacity-0 peer-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50"
              />
            </span>{" "}
            whom I cherish beyond measure, and an insane{" "}
            <span className="relative inline-block">
              <span className="peer cursor-pointer transition">
                tiny old man cat
              </span>
              <Image
                src="/images/misc/doc.png"
                alt="Doc the cat"
                width={120}
                height={120}
                className="absolute top-full left-[calc(100%-10rem)] rounded shadow-lg opacity-0 peer-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50"
              />
            </span>
            .
          </p>
          <br />

          <p className="ml-6 text-right">
            When I&apos;m not at work, you can find me taking photos, doing
            yoga, <span>TRANSCENDING&trade;</span>, communing with friends, 3D
            printing, riding motorcycles, getting involved in mutual aid, or
            playing Fallout 4.
          </p>
          <br />

          <p className="ml-0">
            I truly love connecting with new people – email me or find me on
            social media. Let&apos;s do some good together.
          </p>
          <br />
        </div>
      </div>

      <div id="work">
        <Link
          href="/work"
          className="flex items-center gap-2 text-l font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-black dark:hover:text-white transition"
        >
          <LayoutListIcon className="w-5 h-5" />
          Work History, Skills, Extras, etc.
        </Link>
      </div>
    </div>
  );
}
