// components/SidebarWrapper.tsx
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import SidebarClient from "./SidebarClient";

export const dynamic = "force-dynamic";

const SidebarWrapper = async () => {
  let session = null;
  try {
    session = await auth.api.getSession({
      headers: await headers(),
    });
  } catch (e) {
    console.log("No session context available:", e);
  }

  if (!session) return null;

  return <SidebarClient session={session} />;
};

export default SidebarWrapper;
