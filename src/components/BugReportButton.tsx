import { BugIcon } from "lucide-react";

export default function BugReportButton() {
  return (
    <a
      href="https://github.com/jfogiato/josephafogiatodotcom/issues/new"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-1 right-1 p-2 rounded-full shadow-lg flex items-center justify-center hover:opacity-80 transition-opacity no-print"
      title="Report a Bug / Request a Feature"
    >
      <BugIcon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
    </a>
  );
}