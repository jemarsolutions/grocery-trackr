"use client";
import { signOutAction } from "@/server/auth/auth";
import { Box, LogOut, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarLinks = () => {
  const path = usePathname();
  return (
    <>
      <Link
        className={`flex items-center px-4 py-2 text-purple-600 transition-colors duration-300 transform rounded-lg dark:text-white hover:bg-purple-200 dark:hover:bg-purple-800 dark:hover:text-purple-200 hover:text-purple-700 ${
          path == "/products" && "dark:bg-purple-800 bg-purple-200"
        }`}
        href="/products"
      >
        <Box className="w-5 h-5" />

        <span className="mx-4 font-medium">Products</span>
      </Link>
      <Link
        className={`flex items-center px-4 py-2 text-purple-600 transition-colors duration-300 transform rounded-lg dark:text-white hover:bg-purple-200 dark:hover:bg-purple-800 dark:hover:text-purple-200 hover:text-purple-700 ${
          path == "/to-buy-products" && "dark:bg-purple-800 bg-purple-200"
        }`}
        href="/to-buy-products"
      >
        <ShoppingCart className="w-5 h-5" />

        <span className="mx-4 font-medium">To Buy Products</span>
      </Link>
      <div className="border dark:border-purple-500 border-purple-200 my-3"></div>
      <form action={signOutAction}>
        <button
          className="flex items-center px-4 py-2 text-purple-600 transition-colors duration-300 transform rounded-lg dark:text-white hover:bg-purple-200 dark:hover:bg-purple-800 dark:hover:text-purple-200 hover:text-purple-700 cursor-pointer w-full"
          type="submit"
        >
          <LogOut className="w-5 h-5" />

          <span className="mx-4 font-medium">Logout</span>
        </button>
      </form>
    </>
  );
};

export default SidebarLinks;
