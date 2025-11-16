"use client";

import { useState } from "react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import SidebarLinks from "./SidebarLinks";
import { MenuIcon, XIcon } from "lucide-react";

export const dynamic = "force-dynamic";

const Sidebar = async () => {
  const [isOpen, setIsOpen] = useState(false);

  let session = null;
  try {
    session = await auth.api.getSession({
      headers: await headers(),
    });
  } catch (e) {
    console.log("No session context available:", e);
  }
  if (!session) return null;

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <button
        className="p-2 m-2 text-purple-700 rounded-md bg-purple-200 hover:bg-purple-300 dark:bg-purple-800 dark:hover:bg-purple-700 md:hidden"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <XIcon /> : <MenuIcon />}
      </button>

      {/* Sidebar Container */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-purple-50 dark:bg-purple-900 border-r border-purple-300 dark:border-purple-700 shadow-md transform transition-transform duration-300 ease-in-out 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:static`}
      >
        <Link href="/" className="mx-auto flex gap-3 items-center p-4">
          <p className="uppercase font-medium text-lg">Grocery</p>
          <img className="w-auto h-6 sm:h-7" src="/images/logo.png" alt="" />
          <p className="uppercase font-medium text-lg">Trackr</p>
        </Link>

        <div className="flex flex-col items-center mt-10 -mx-2">
          {session.user.image ? (
            <Image
              className="object-cover w-24 h-24 mx-2 rounded-full"
              src={`/${session.user.image}`}
              alt="avatar"
              width={100}
              height={100}
            />
          ) : (
            <Image
              className="object-cover w-24 h-24 mx-2 rounded-full"
              src="/images/placeholder-user-image.png"
              alt="avatar"
              width={100}
              height={100}
            />
          )}
          <h4 className="mx-2 mt-2 font-medium text-xl text-purple-800 dark:text-purple-200">
            {session.user.name}
          </h4>
          <Link
            href={`mailto:${session.user.email}`}
            className="mx-2 mt-1 text-md font-medium text-purple-400 dark:text-purple-400"
          >
            {session.user.email}
          </Link>
        </div>

        <div className="flex flex-col justify-between flex-1 mt-10">
          <nav className="flex flex-col gap-2">
            <SidebarLinks />
          </nav>
        </div>
      </aside>

      {/* Optional overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
