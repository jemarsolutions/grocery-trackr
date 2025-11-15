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
    <div className="flex flex-col items-start h-screen justify-start w-full p-8">
      <form action={addProduct} className="w-full">
        <input type="hidden" name="userId" value={userId} />
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12 dark:border-white/10 w-full">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
              Add Product
            </h2>
            <p className="mt-1 text-sm/6 text-gray-600 dark:text-gray-400">
              Please fill out all the information needed as detailed as you can.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                  >
                    Product Name
                  </label>
                  <div className="mt-2">
                    <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-pink-600 dark:bg-white/5 dark:outline-white/10 dark:focus-within:outline-pink-500">
                      <input
                        id="name"
                        type="text"
                        name="name"
                        className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 dark:bg-transparent dark:text-white dark:placeholder:text-gray-500"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="brand"
                    className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                  >
                    Product Brand
                  </label>
                  <div className="mt-2">
                    <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-pink-600 dark:bg-white/5 dark:outline-white/10 dark:focus-within:outline-pink-500">
                      <input
                        id="brand"
                        type="text"
                        name="brand"
                        className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 dark:bg-transparent dark:text-white dark:placeholder:text-gray-500"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="category"
                    className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                  >
                    Product Category
                  </label>
                  <div className="mt-2 grid grid-cols-1">
                    <select
                      id="category"
                      name="category"
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-pink-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:*:bg-gray-800 dark:focus:outline-pink-500"
                    >
                      <option value="Beverages">Beverages</option>
                      <option value="Canned Goods">Canned Goods</option>
                      <option value="Dairy">Dairy</option>
                      <option value="Snacks">Snacks</option>
                      <option value="Frozen Foods">Frozen Foods</option>
                      <option value="Bakery">Bakery</option>
                      <option value="Condiments">Condiments</option>
                      <option value="Grains & Pasta">Grains & Pasta</option>
                      <option value="Household Supplies">
                        Household Supplies
                      </option>
                      <option value="Personal Care">Personal Care</option>
                      <option value="Produce">Produce</option>
                      <option value="Meat & Seafood">Meat & Seafood</option>
                    </select>
                    <svg
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      data-slot="icon"
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4 dark:text-gray-400"
                    >
                      <path
                        d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <label
                      htmlFor="quantity"
                      className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                    >
                      Product Quantity
                    </label>
                    <div className="mt-2 grid grid-cols-1">
                      <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-pink-600 dark:bg-white/5 dark:outline-white/10 dark:focus-within:outline-pink-500">
                        <input
                          id="quantity"
                          type="number"
                          name="quantity"
                          className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 dark:bg-transparent dark:text-white dark:placeholder:text-gray-500"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="unit"
                      className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                    >
                      Product Unit
                    </label>
                    <div className="mt-2 grid grid-cols-1">
                      <select
                        id="unit"
                        name="unit"
                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-pink-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:*:bg-gray-800 dark:focus:outline-pink-500"
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
                      <svg
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        data-slot="icon"
                        aria-hidden="true"
                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4 dark:text-gray-400"
                      >
                        <path
                          d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="min_quantity"
                      className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                    >
                      Product Min. Quantity
                    </label>
                    <div className="mt-2 grid grid-cols-1">
                      <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-pink-600 dark:bg-white/5 dark:outline-white/10 dark:focus-within:outline-pink-500">
                        <input
                          id="min_quantity"
                          type="number"
                          name="min_quantity"
                          className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 dark:bg-transparent dark:text-white dark:placeholder:text-gray-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="price_per_unit"
                    className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                  >
                    Product Price Per Unit
                  </label>
                  <div className="mt-2">
                    <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-pink-600 dark:bg-white/5 dark:outline-white/10 dark:focus-within:outline-pink-500">
                      <input
                        id="price_per_unit"
                        type="number"
                        name="price_per_unit"
                        className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 dark:bg-transparent dark:text-white dark:placeholder:text-gray-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="notes"
                  className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                >
                  Product Notes
                </label>
                <div className="mt-2">
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-pink-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-pink-500"
                  ></textarea>
                </div>
                <p className="mt-3 text-sm/6 text-gray-600 dark:text-gray-400">
                  Optional notes{" "}
                  {"(e.g., “Buy only when on sale”, “Expires soon”)"}
                </p>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="image"
                  className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                >
                  Product Image
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 dark:border-white/25">
                  <div className="text-center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      data-slot="icon"
                      aria-hidden="true"
                      className="mx-auto size-12 text-gray-300 dark:text-gray-600"
                    >
                      <path
                        d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      />
                    </svg>
                    <div className="mt-4 flex text-sm/6 text-gray-600 dark:text-gray-400">
                      <label
                        htmlFor="image"
                        className="relative cursor-pointer rounded-md bg-transparent font-semibold text-pink-600 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-pink-600 hover:text-pink-500 dark:text-pink-400 dark:focus-within:outline-pink-500 dark:hover:text-pink-300"
                      >
                        <span>Upload a file</span>
                        <input
                          id="image"
                          type="file"
                          name="image"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs/5 text-gray-600 dark:text-gray-400">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm/6 font-semibold text-gray-900 dark:text-white"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-pink-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 dark:bg-pink-500 dark:shadow-none dark:focus-visible:outline-pink-500 cursor-pointer"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
