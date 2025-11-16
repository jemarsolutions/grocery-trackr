"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SidebarLinks from "./SidebarLinks";
import { MenuIcon, XIcon } from "lucide-react";

const SidebarClient = ({ session }: { session: any }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <button
        className="md:hidden absolute p-2 m-2 text-purple-700 dark:text-purple-200 rounded-md bg-purple-200 hover:bg-purple-300 dark:bg-purple-800 dark:hover:bg-purple-700 z-60 h-10"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <XIcon /> : <MenuIcon />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:static inset-y-0 left-0 w-90 bg-purple-50 dark:bg-purple-900 border-r border-purple-300 dark:border-purple-700 shadow-md transform transition-transform duration-300 ease-in-out 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 z-50`}
      >
        {/* Header */}
        <Link
          href="/"
          className="flex gap-3 items-center p-4 justify-center border-b border-purple-300 dark:border-purple-700"
        >
          <p className="uppercase font-medium text-lg">Grocery</p>
          <img className="w-auto h-6 sm:h-7" src="/images/logo.png" alt="" />
          <p className="uppercase font-medium text-lg">Trackr</p>
        </Link>

        {/* User Info */}
        <div className="flex flex-col items-center mt-8 px-4">
          <Image
            className="object-cover w-24 h-24 rounded-full"
            src={
              session.user.image
                ? `/${session.user.image}`
                : "/images/placeholder-user-image.png"
            }
            alt="avatar"
            width={100}
            height={100}
          />
          <h4 className="mt-2 text-xl font-medium text-purple-800 dark:text-purple-200 text-center break-words">
            {session.user.name}
          </h4>
          <Link
            href={`mailto:${session.user.email}`}
            className="mt-1 text-md font-medium text-purple-400 dark:text-purple-400 text-center break-all"
          >
            {session.user.email}
          </Link>
        </div>

        {/* Links */}
        <nav className="flex-1 px-4 mt-6 overflow-y-auto">
          <SidebarLinks />
        </nav>
      </aside>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default SidebarClient;
