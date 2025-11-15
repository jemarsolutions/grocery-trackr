import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import SidebarLinks from "./SidebarLinks";

const Sidebar = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) return null;
  return (
    <div>
      <aside className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-purple-50 border-r rtl:border-r-0 rtl:border-l dark:bg-purple-900 dark:border-purple-700">
        <Link href="/" className="mx-auto flex gap-3 items-center">
          <p className="uppercase font-medium text-lg">Grocery</p>
          <img className="w-auto h-6 sm:h-7" src="/images/logo.png" alt="" />
          <p className="uppercase font-medium text-lg">Trackr</p>
        </Link>

        <div className="flex flex-col items-center mt-10 -mx-2">
          {session.user.image && (
            <Image
              className="object-cover w-24 h-24 mx-2 rounded-full"
              src={`/${session.user.image}`}
              alt="avatar"
              width={100}
              height={100}
            />
          )}
          {!session.user.image && (
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
    </div>
  );
};

export default Sidebar;
