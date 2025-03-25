"use client";

import { useEffect, useState } from "react";

export default function ResumePage() {
  const [isSubdomain, setIsSubdomain] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const host = window.location.hostname;
      if (host.startsWith("resume.")) {
        setIsSubdomain(true);
      }
    }
  }, []);

  if (!isSubdomain) {
    return <div className="text-center mt-20 text-red-500">404 Not Found</div>;
  }

  return (
    <div className="min-h-screen p-10 text-white bg-black">
      <h1 className="text-4xl font-bold">Joseph A. Fogiato – Résumé</h1>
      {/* ... resume content ... */}
    </div>
  );
}