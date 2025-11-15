import { auth } from "@/lib/auth";
import { addProduct } from "@/server/product/addProduct";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

const AddProduct = async () => {
  let session = null;
  try {
    session = await auth.api.getSession({
      headers: await headers(),
    });
  } catch (e) {
    console.log("No session context available:", e);
  }
  const userId = session?.user.id;
  if (!session) redirect("/signin");

  return (
    <div className="flex flex-col items-center w-full min-h-screen px-4 py-8 sm:px-6 lg:px-8 gap-6">
      <form action={addProduct} className="w-full max-w-full space-y-12">
        <input type="hidden" name="userId" value={userId} />

        {/* Header */}
        <div className="border-b border-gray-900/10 pb-6 dark:border-white/10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white">
            Add Product
          </h2>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Please fill out all the information needed as detailed as you can.
          </p>
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-6">
          {/* Name, Brand, Category */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 dark:bg-white/5 dark:text-white dark:border-white/10 focus:border-pink-500 focus:ring focus:ring-pink-500"
              />
            </div>

            <div>
              <label
                htmlFor="brand"
                className="block text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Brand
              </label>
              <input
                id="brand"
                name="brand"
                type="text"
                className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 dark:bg-white/5 dark:text-white dark:border-white/10 focus:border-pink-500 focus:ring focus:ring-pink-500"
              />
            </div>

            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Category
              </label>
              <select
                id="category"
                name="category"
                className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 dark:bg-white/5 dark:text-white dark:border-white/10 focus:border-pink-500 focus:ring focus:ring-pink-500"
              >
                <option value="Beverages">Beverages</option>
                <option value="Canned Goods">Canned Goods</option>
                <option value="Dairy">Dairy</option>
                <option value="Snacks">Snacks</option>
                <option value="Frozen Foods">Frozen Foods</option>
                <option value="Bakery">Bakery</option>
                <option value="Condiments">Condiments</option>
                <option value="Grains & Pasta">Grains & Pasta</option>
                <option value="Household Supplies">Household Supplies</option>
                <option value="Personal Care">Personal Care</option>
                <option value="Produce">Produce</option>
                <option value="Meat & Seafood">Meat & Seafood</option>
              </select>
            </div>
          </div>

          {/* Quantity, Unit, Min Quantity, Price */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <label
                htmlFor="quantity"
                className="block text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Quantity
              </label>
              <input
                id="quantity"
                name="quantity"
                type="number"
                className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 dark:bg-white/5 dark:text-white dark:border-white/10 focus:border-pink-500 focus:ring focus:ring-pink-500"
              />
            </div>

            <div>
              <label
                htmlFor="unit"
                className="block text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Unit
              </label>
              <select
                id="unit"
                name="unit"
                className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 dark:bg-white/5 dark:text-white dark:border-white/10 focus:border-pink-500 focus:ring focus:ring-pink-500"
              >
                <option value="pcs">pcs</option>
                <option value="pack">pack</option>
                <option value="box">box</option>
                <option value="bottle">bottle</option>
                <option value="can">can</option>
                <option value="kg">kg</option>
                <option value="g">g</option>
                <option value="liters">liters</option>
                <option value="ml">ml</option>
                <option value="tray">tray</option>
                <option value="jar">jar</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="min_quantity"
                className="block text-sm font-medium text-gray-900 dark:text-white"
              >
                Min Quantity
              </label>
              <input
                id="min_quantity"
                name="min_quantity"
                type="number"
                className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 dark:bg-white/5 dark:text-white dark:border-white/10 focus:border-pink-500 focus:ring focus:ring-pink-500"
              />
            </div>

            <div>
              <label
                htmlFor="price_per_unit"
                className="block text-sm font-medium text-gray-900 dark:text-white"
              >
                Price per Unit
              </label>
              <input
                id="price_per_unit"
                name="price_per_unit"
                type="number"
                className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 dark:bg-white/5 dark:text-white dark:border-white/10 focus:border-pink-500 focus:ring focus:ring-pink-500"
              />
            </div>
          </div>

          {/* Notes */}
          <div>
            <label
              htmlFor="notes"
              className="block text-sm font-medium text-gray-900 dark:text-white"
            >
              Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 dark:bg-white/5 dark:text-white dark:border-white/10 focus:border-pink-500 focus:ring focus:ring-pink-500"
            />
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Optional notes (e.g., “Buy only when on sale”, “Expires soon”)
            </p>
          </div>

          {/* Image Upload */}
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-900 dark:text-white"
            >
              Product Image
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-300 dark:border-white/25 px-6 py-10">
              <div className="text-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mx-auto h-12 w-12 text-gray-300 dark:text-gray-600"
                >
                  <path d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" />
                </svg>
                <div className="mt-4 flex justify-center text-sm text-gray-600 dark:text-gray-400">
                  <label
                    htmlFor="image"
                    className="relative cursor-pointer rounded-md bg-transparent font-semibold text-pink-600 hover:text-pink-500 dark:text-pink-400 dark:hover:text-pink-300"
                  >
                    <span>Upload a file</span>
                    <input
                      id="image"
                      name="image"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs mt-2 text-gray-600 dark:text-gray-400">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-4 mt-6">
          <button
            type="button"
            className="w-full sm:w-auto text-gray-900 dark:text-white text-sm font-medium"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-full sm:w-auto rounded-md bg-pink-600 px-4 py-2 text-white font-semibold hover:bg-pink-500 focus:outline-none focus:ring focus:ring-pink-500"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
