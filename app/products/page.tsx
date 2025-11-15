import PrintButton from "@/components/PrintButton";
import ProductList from "@/components/ProductList";
import { auth } from "@/lib/auth";
import { getAllProducts } from "@/server/product/getAllProducts";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

const ProductsPage = async () => {
  let session = null;
  try {
    session = await auth.api.getSession({
      headers: await headers(),
    });
  } catch (e) {
    console.log("No session context available:", e);
  }

  const products = await getAllProducts();
  if (!session) redirect("/signin");

  return (
    <div className="flex flex-col items-start justify-start w-full min-h-screen p-4 sm:p-8 bg-purple-50 dark:bg-purple-950">
      {/* Header */}
      <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
        <h1 className="font-bold text-xl sm:text-2xl dark:text-purple-300 text-purple-800">
          All Products
        </h1>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
          <Link
            href="/products/add-product"
            className="w-full sm:w-auto px-4 sm:px-6 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-500 text-center focus:ring focus:ring-purple-300 focus:ring-opacity-80 transition"
          >
            Add Product
          </Link>
          <PrintButton />
        </div>
      </div>

      {/* Product List Table */}
      <div className="flex flex-col w-full mt-6 sm:mt-10">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 w-full inline-block align-middle min-w-full">
            <div className="overflow-hidden border border-purple-200 dark:border-purple-700 rounded-lg">
              <ProductList products={products} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
