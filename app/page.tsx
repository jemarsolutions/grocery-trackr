import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

const Home = async () => {
  let session = null;
  try {
    session = await auth.api.getSession({
      headers: await headers(),
    });
  } catch (e) {
    console.log("No session context available:", e);
  }

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-purple-100 dark:bg-purple-950 px-4">
      <section className="w-full max-w-4xl">
        <div className="flex flex-col items-center text-center py-12">
          {/* Logo */}
          <Image
            src="/images/logo.png"
            alt="Grocery Trackr Logo"
            className="mx-auto h-20 w-auto sm:h-24 md:h-28"
            height={112}
            width={112}
          />

          {/* Heading */}
          <h2 className="mt-8 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white max-w-2xl">
            Grocery <span className="text-purple-500">Trackr.</span>
          </h2>

          {/* Description */}
          <p className="mt-4 sm:mt-6 text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
            <b>Grocery Trackr</b> is a smart home inventory app that helps you
            and your family keep track of grocery items — what you have, what’s
            running low, and what you need to buy next. Easily manage
            quantities, brands, and prices, so grocery shopping becomes
            organized, efficient, and stress-free.
          </p>

          {/* Buttons for non-logged-in users */}
          {!session && (
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center">
              <Link
                href="/signin"
                className="w-full sm:w-auto px-6 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-500 transition duration-300 focus:ring focus:ring-purple-300 focus:ring-opacity-80 text-center"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="w-full sm:w-auto px-6 py-2 text-purple-600 bg-purple-300 rounded-lg hover:bg-purple-200 transition duration-300 focus:ring focus:ring-purple-300 focus:ring-opacity-80 text-center"
              >
                Sign Up
              </Link>
            </div>
          )}

          {/* Buttons for logged-in users */}
          {session && (
            <div className="mt-6 sm:mt-8 flex justify-center w-full">
              <Link
                href="/products/add-product"
                className="px-6 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-500 transition duration-300 focus:ring focus:ring-purple-300 focus:ring-opacity-80"
              >
                Add Product
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
