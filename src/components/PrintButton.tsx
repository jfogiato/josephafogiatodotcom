"use client";

export default function PrintButton() {
  const printPage = () => {
    window.print();
  };

  return (
    <div className="relative group inline-block no-print">
      <button
        onClick={printPage}
        className="mt-2 px-3 py-1 text-xs font-medium rounded border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
      >
        Print / Save as PDF
      </button>

      {/* Tooltip */}
      <div className="italic absolute left-1/2 -translate-x-1/2 mt-1 w-48 text-xs text-center px-2 py-1 rounded bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none">
        Tip: Uncheck “Headers and footers” in the print dialog.
      </div>
    </div>
  );
}
