"use client";
const PrintButton = () => {
  return (
    <div>
      <button
        onClick={() => window.print()}
        className="inline-flex items-center justify-center px-6 py-2 text-black duration-300 dark:bg-yellow-300 bg-yellow-400 rounded-lg hover:bg-purple-500 focus:ring focus:ring-purple-300 focus:ring-opacity-80 cursor-pointer"
      >
        Print
      </button>
    </div>
  );
};

export default PrintButton;
