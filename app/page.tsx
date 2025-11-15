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
    <>
      <div className="flex items-center h-screen justify-center w-full">
        <section>
          <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
            <Image
              src="/images/logo.png"
              alt="Your Company"
              className="mx-auto h-20 w-auto"
              height={100}
              width={100}
            />
            <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white mt-10">
              Grocery <span className="text-purple-500">Trackr.</span>
            </h2>

            <p className="max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300">
              <b>Grocery Trackr</b> is a smart home inventory app that helps you
              and your family keep track of grocery items — what you have,
              what’s running low, and what you need to buy next. Easily manage
              quantities, brands, and prices, so grocery shopping becomes
              organized, efficient, and stress-free.
            </p>
            {!session && (
              <div className="inline-flex gap-3 w-full mt-6 sm:w-xs">
                <Link
                  href="/signin"
                  className="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-purple-600 rounded-lg hover:bg-purple-500 focus:ring focus:ring-purple-300 focus:ring-opacity-80"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center w-full px-6 py-2 text-purple-600 duration-300 bg-purple-300 rounded-lg hover:bg-purple-200 focus:ring focus:ring-purple-300 focus:ring-opacity-80"
                >
                  Sign Up
                </Link>
              </div>
            )}
            {session && (
              <div className="inline-flex gap-3 w-full mt-6 items-center justify-center">
                <Link
                  href="/products/add-product"
                  className="inline-flex items-center justify-center py-2 px-6 text-white duration-300 bg-purple-600 rounded-lg hover:bg-purple-500 focus:ring focus:ring-purple-300 focus:ring-opacity-80"
                >
                  Add Product
                </Link>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
