"use client";
const PrintButton = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
      <button
        onClick={() => window.print()}
        className="inline-flex items-center justify-center px-6 py-2 text-black duration-300 dark:bg-yellow-300 bg-yellow-400 rounded-lg hover:bg-yellow-500 transition focus:ring focus:ring-purple-300 focus:ring-opacity-80 text-center"
      >
        Print
      </button>
    </div>
  );
};

export default PrintButton;
