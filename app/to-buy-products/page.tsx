import PrintButton from "@/components/PrintButton";
import ProductList from "@/components/ProductList";
import { auth } from "@/lib/auth";
import { getAllToBuyProducts } from "@/server/product/getAllToBuyProducts";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

const ToBuyProductsPage = async () => {
  let session = null;
  try {
    session = await auth.api.getSession({
      headers: await headers(),
    });
  } catch (e) {
    console.log("No session context available:", e);
  }

  const products = await getAllToBuyProducts();

  if (!session) redirect("/signin");

  return (
    <div className="flex flex-col items-start justify-start w-full min-h-screen p-4 sm:p-8 bg-purple-50 dark:bg-purple-950">
      <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
        <h1 className="font-bold text-2xl sm:text-3xl dark:text-purple-300 text-purple-800">
          All To Buy Products
        </h1>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Link
            href="/products/add-product"
            className="inline-flex items-center justify-center px-6 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-500 transition duration-300 focus:ring focus:ring-purple-300 focus:ring-opacity-80 text-center"
          >
            Add Product
          </Link>
          <PrintButton />
        </div>
      </div>

      <div className="flex flex-col w-full mt-6 sm:mt-10 overflow-x-auto rounded-lg border border-purple-200 dark:border-purple-700">
        <div className="min-w-full">
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
};

export default ToBuyProductsPage;
