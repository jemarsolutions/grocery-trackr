import { signInAction } from "@/server/auth/auth";
import Image from "next/image";
import Link from "next/link";

const SignInPage = () => {
  return (
    <div className="h-screen w-full">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 items-center">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Your Company"
              className="mx-auto h-20 w-auto dark:hidden"
              height={100}
              width={100}
            />
            <Image
              src="/images/logo.png"
              alt="Your Company"
              className="mx-auto h-20 w-auto not-dark:hidden"
              height={100}
              width={100}
            />
          </Link>
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action={signInAction} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-purple-500"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  name="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-purple-500"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-purple-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-purple-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 dark:bg-purple-500 dark:shadow-none dark:hover:bg-purple-400 dark:focus-visible:outline-purple-500"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500 dark:text-gray-400">
            Not a member?
            <Link
              href="/signup"
              className="font-semibold text-purple-600 hover:text-purple-500 dark:text-purple-400 dark:hover:text-purple-300"
            >
              {" "}
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
