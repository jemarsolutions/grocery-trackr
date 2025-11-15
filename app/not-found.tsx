import Link from "next/link";

export const dynamic = "force-dynamic";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-6 text-lg">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-500"
      >
        Go back home
      </Link>
    </div>
  );
}
