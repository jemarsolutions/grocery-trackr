import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

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
    <table className="w-full divide-y divide-gray-200 dark:divide-neutral-700 rounded-2xl overflow-hidden">
      <thead className="bg-purple-300 dark:bg-purple-800">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-start text-md font-bold text-purple-800 uppercase dark:text-purple-100"
          >
            Image
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-start text-md font-bold text-purple-800 uppercase dark:text-purple-100"
          >
            Name
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-start text-md font-bold text-purple-800 uppercase dark:text-purple-100"
          >
            Brand
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-start text-md font-bold text-purple-800 uppercase dark:text-purple-100"
          >
            Category
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-start text-md font-bold text-purple-800 uppercase dark:text-purple-100"
          >
            Quantity
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-start text-md font-bold text-purple-800 uppercase dark:text-purple-100"
          >
            Price Per Unit
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-start text-md font-bold text-purple-800 uppercase dark:text-purple-100"
          >
            Total Value
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-end text-md font-bold text-purple-800 uppercase dark:text-purple-100"
          >
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
            <td className="px-6 py-4 whitespace-nowrap text-sm text-purple-800 dark:text-purple-200">
              <Image
                alt={product.name}
                width={50}
                height={50}
                src={product.image}
              />
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-md font-semibold text-purple-800 dark:text-purple-200">
              {product.name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-purple-800 dark:text-purple-200">
              {product.brand}
            </td>
            <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-purple-800 dark:text-purple-200">
              {product.category}
            </td>
            <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-purple-800 dark:text-purple-200">
              {product.quantity} {product.unit}
            </td>

            <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-purple-800 dark:text-pink-200">
              ₱{product.price_per_unit}
            </td>

            <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-purple-800 dark:text-purple-200">
              ₱
              {(parseFloat(product.price_per_unit) * product.quantity).toFixed(
                2
              )}
            </td>

            <td className="px-6 py-4 whitespace-nowrap text-end text-md font-medium">
              <Link
                href={`/products/${product.id}`}
                type="button"
                className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-purple-600 hover:text-purple-800 focus:outline-hidden focus:text-purple-800 disabled:opacity-50 disabled:pointer-events-none dark:text-purple-200 dark:hover:text-purple-400 dark:focus:text-purple-400 cursor-pointer py-2 px-4 dark:bg-purple-900 bg-purple-300"
              >
                View Details
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;
