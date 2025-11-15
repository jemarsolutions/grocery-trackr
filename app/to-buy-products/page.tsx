import PrintButton from "@/components/PrintButton";
import ProductList from "@/components/ProductList";
import { auth } from "@/lib/auth";
import { getAllToBuyProducts } from "@/server/product/getAllToBuyProducts";
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
  const products = await getAllToBuyProducts();
  if (!session) redirect("/signin");
  return (
    <div className="flex flex-col items-start h-screen justify-start w-full p-8">
      <div className="w-full flex items-center justify-between">
        <h1 className="font-bold text-2xl dark:text-purple-300 text-purple-800">
          All To Buy Products
        </h1>
        <div className="flex gap-3">
          <Link
            href="/products/add-product"
            className="inline-flex items-center justify-center px-6 py-2 text-white duration-300 bg-purple-600 rounded-lg hover:bg-purple-500 focus:ring focus:ring-purple-300 focus:ring-opacity-80"
          >
            Add Product
          </Link>
          <PrintButton />
        </div>
      </div>
      <div className="flex flex-col w-full mt-10">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden">
              <ProductList products={products} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
