"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { updateProduct } from "@/server/product/updateProduct";
import { useState } from "react";

const UpdateModal = ({ product }: { product: any }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger
          type="button"
          className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-purple-600 hover:text-purple-800 focus:outline-hidden focus:text-purple-800 disabled:opacity-50 disabled:pointer-events-none dark:text-purple-200 dark:hover:text-purple-400 dark:focus:text-purple-400 cursor-pointer py-2 px-4 dark:bg-purple-900 bg-purple-300"
        >
          Update Details
        </DialogTrigger>

        <DialogContent className="max-w-full sm:max-w-5xl dark:bg-purple-900 bg-purple-300">
          <DialogHeader>
            <DialogTitle className="font-bold text-2xl">
              Update Information
            </DialogTitle>
            <DialogDescription>
              Fill out the fields you want to update.
            </DialogDescription>
          </DialogHeader>

          <form
            className="w-full"
            action={async (formData: FormData) => {
              await updateProduct(formData);
              setOpen(false);
            }}
          >
            <input type="hidden" name="id" value={product.id} />

            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12 dark:border-white/10 w-full">
                <div className="mt-10 flex flex-col gap-6">
                  {/* Name, Brand, Category */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Product Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                      >
                        Product Name
                      </label>
                      <div className="mt-2">
                        <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-purple-600 dark:bg-white/5 dark:outline-white/10 dark:focus-within:outline-purple-500">
                          <input
                            id="name"
                            type="text"
                            name="name"
                            defaultValue={product.name}
                            className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 dark:bg-transparent dark:text-white dark:placeholder:text-gray-500"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Product Brand */}
                    <div>
                      <label
                        htmlFor="brand"
                        className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                      >
                        Product Brand
                      </label>
                      <div className="mt-2">
                        <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-purple-600 dark:bg-white/5 dark:outline-white/10 dark:focus-within:outline-purple-500">
                          <input
                            id="brand"
                            type="text"
                            name="brand"
                            defaultValue={product.brand}
                            className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 dark:bg-transparent dark:text-white dark:placeholder:text-gray-500"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Product Category */}
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
                          defaultValue={product.category}
                          className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:*:bg-gray-800 dark:focus:outline-purple-500"
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
                      </div>
                    </div>
                  </div>

                  {/* Quantity, Unit, Min Quantity, Price */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      {/* Quantity */}
                      <div>
                        <label
                          htmlFor="quantity"
                          className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                        >
                          Product Quantity
                        </label>
                        <div className="mt-2 grid grid-cols-1">
                          <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-purple-600 dark:bg-white/5 dark:outline-white/10 dark:focus-within:outline-purple-500">
                            <input
                              id="quantity"
                              type="number"
                              name="quantity"
                              defaultValue={product.quantity}
                              className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 dark:bg-transparent dark:text-white dark:placeholder:text-gray-500"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Unit */}
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
                            defaultValue={product.unit}
                            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:*:bg-gray-800 dark:focus:outline-purple-500"
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
                      </div>

                      {/* Min Quantity */}
                      <div>
                        <label
                          htmlFor="min_quantity"
                          className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                        >
                          Product Min. Quantity
                        </label>
                        <div className="mt-2 grid grid-cols-1">
                          <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-purple-600 dark:bg-white/5 dark:outline-white/10 dark:focus-within:outline-purple-500">
                            <input
                              id="min_quantity"
                              type="number"
                              name="min_quantity"
                              defaultValue={product.min_quantity}
                              className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 dark:bg-transparent dark:text-white dark:placeholder:text-gray-500"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Price Per Unit */}
                    <div>
                      <label
                        htmlFor="price_per_unit"
                        className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                      >
                        Product Price Per Unit
                      </label>
                      <div className="mt-2">
                        <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-purple-600 dark:bg-white/5 dark:outline-white/10 dark:focus-within:outline-purple-500">
                          <input
                            id="price_per_unit"
                            type="number"
                            name="price_per_unit"
                            defaultValue={product.price_per_unit}
                            className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 dark:bg-transparent dark:text-white dark:placeholder:text-gray-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Notes */}
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
                        defaultValue={product.notes}
                        rows={3}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-purple-500"
                      />
                    </div>
                    <p className="mt-3 text-sm/6 text-gray-600 dark:text-gray-400">
                      Optional notes (e.g., “Buy only when on sale”, “Expires
                      soon”)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-end gap-x-6 gap-y-3">
              <button
                onClick={() => setOpen(false)}
                type="button"
                className="text-sm/6 font-semibold text-gray-900 dark:text-white w-full sm:w-auto"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-purple-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 dark:bg-purple-500 dark:shadow-none dark:focus-visible:outline-purple-500 cursor-pointer w-full sm:w-auto"
              >
                Save
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateModal;
