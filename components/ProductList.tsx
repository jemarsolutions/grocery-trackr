import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

interface Product {
  id: string;
  userId: string;
  name: string;
  brand: string;
  category: string;
  quantity: number;
  unit: string;
  min_quantity: number;
  price_per_unit: string;
  image: string;
  notes: string | null;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = async ({ products }) => {
  let session = null;
  try {
    session = await auth.api.getSession({
      headers: await headers(),
    });
  } catch (e) {
    console.log("No session context available:", e);
  }
  if (!session) return null;

  return (
    <div className="overflow-x-auto w-full rounded-lg border border-purple-200 dark:border-purple-700">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
        <thead className="bg-purple-300 dark:bg-purple-800">
          <tr>
            <th className="px-4 py-2 text-start text-sm sm:text-md font-bold text-purple-800 uppercase dark:text-purple-100">
              Image
            </th>
            <th className="px-4 py-2 text-start text-sm sm:text-md font-bold text-purple-800 uppercase dark:text-purple-100">
              Name
            </th>
            <th className="px-4 py-2 text-start text-sm sm:text-md font-bold text-purple-800 uppercase dark:text-purple-100">
              Brand
            </th>
            <th className="px-4 py-2 text-start text-sm sm:text-md font-bold text-purple-800 uppercase dark:text-purple-100">
              Category
            </th>
            <th className="px-4 py-2 text-start text-sm sm:text-md font-bold text-purple-800 uppercase dark:text-purple-100">
              Quantity
            </th>
            <th className="px-4 py-2 text-start text-sm sm:text-md font-bold text-purple-800 uppercase dark:text-purple-100">
              Price/Unit
            </th>
            <th className="px-4 py-2 text-start text-sm sm:text-md font-bold text-purple-800 uppercase dark:text-purple-100">
              Total Value
            </th>
            <th className="px-4 py-2 text-end text-sm sm:text-md font-bold text-purple-800 uppercase dark:text-purple-100">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
              className="odd:bg-purple-200 even:bg-purple-100 hover:bg-purple-200 dark:odd:bg-purple-500 dark:even:bg-purple-600 dark:hover:bg-purple-700"
            >
              <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-purple-800 dark:text-purple-200">
                <Image
                  alt={product.name}
                  width={50}
                  height={50}
                  src={product.image}
                  className="rounded"
                />
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base font-semibold text-purple-800 dark:text-purple-200">
                {product.name}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base font-semibold text-purple-800 dark:text-purple-200">
                {product.brand}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base font-semibold text-purple-800 dark:text-purple-200">
                {product.category}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base font-semibold text-purple-800 dark:text-purple-200">
                {product.quantity} {product.unit}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base font-semibold text-purple-800 dark:text-purple-200">
                ₱{product.price_per_unit}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base font-semibold text-purple-800 dark:text-purple-200">
                ₱
                {(
                  parseFloat(product.price_per_unit) * product.quantity
                ).toFixed(2)}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-end font-medium">
                <Link
                  href={`/products/${product.id}`}
                  className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-purple-600 hover:text-purple-800 focus:outline-none dark:text-purple-200 dark:hover:text-purple-400 dark:focus:text-purple-400 cursor-pointer py-1 px-2 sm:py-2 sm:px-4 dark:bg-purple-900 bg-purple-300"
                >
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
