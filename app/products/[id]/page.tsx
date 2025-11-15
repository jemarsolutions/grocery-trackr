import UpdateModal from "@/components/UpdateModal";
import { auth } from "@/lib/auth";
import { getProductById } from "@/server/product/getProductByID";
import { headers } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";

const ProductDetail = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const productData = await getProductById(id);
  const product = productData[0];
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) redirect("/");
  return (
    <div className="flex min-h-full w-full flex-col px-6 py-12 lg:px-8 items-center gap-6">
      <div className="w-full rounded-2xl shadow-md dark:bg-purple-800 bg-purple-200">
        <div className="p-5 border-b dark:border-purple-900 border-purple-300  flex w-full items-center justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="dark:text-purple-200 text-purple-800 font-bold text-3xl">
              {product.name} | ₱{product.price_per_unit}
            </h1>
            <p className="italic text-sm dark:text-purple-200 text-purple-500">
              Added on{" "}
              <span className="font-bold">
                {product.created_at?.toLocaleDateString(undefined, {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="dark:text-purple-200 text-purple-800 font-semibold">
              Total Value:{" "}
              <span className="text-xl">
                ₱
                {(
                  parseFloat(product.price_per_unit) * product.quantity
                ).toFixed(2)}
              </span>
            </p>
            <p className="italic text-sm dark:text-purple-200 text-purple-500">
              Updated on{" "}
              <span className="font-bold">
                {product.updated_at?.toLocaleDateString(undefined, {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </p>
          </div>
        </div>
        <div className="p-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center justify-between gap-5">
              <div className="py-2 pr-5 border-r dark:border-purple-600 border-purple-300">
                <h2 className="dark:text-purple-200 text-purple-800 font-bold text-lg">
                  Brand
                </h2>
                <p className="dark:text-purple-200 text-purple-800">
                  {product.brand}
                </p>
              </div>
              <div className="py-2 pr-5 border-r dark:border-purple-600 border-purple-300">
                <h2 className="dark:text-purple-200 text-purple-800 font-bold text-lg">
                  Category
                </h2>
                <p className="dark:text-purple-200 text-purple-800">
                  {product.category}
                </p>
              </div>
              <div className="py-2 pr-5 border-r dark:border-purple-600 border-purple-300">
                <h2 className="dark:text-purple-200 text-purple-800 font-bold text-lg">
                  Quantity
                </h2>
                <p className="dark:text-purple-200 text-purple-800">
                  {product.quantity} {product.unit}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <Image
                src={product.image}
                width={70}
                height={70}
                alt={product.name}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Next One */}
      <div className="w-full rounded-2xl shadow-md dark:bg-purple-800 bg-purple-200">
        <div className="p-5 border-b dark:border-purple-900 border-purple-300  flex w-full items-center justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="dark:text-purple-200 text-purple-800 font-medium text-lg">
              Notes
            </h1>
          </div>
        </div>
        <div className="p-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center justify-between gap-5">
              {!product.notes && <p>N/A</p>}
              {product.notes && (
                <p className="text-md dark:text-purple-200 text-purple-800">
                  {product.notes}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Next One */}
      <div className="w-full rounded-2xl shadow-md dark:bg-purple-800 bg-purple-200">
        <div className="p-5 border-b dark:border-purple-900 border-purple-300  flex w-full items-center justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="dark:text-purple-200 text-purple-800 font-medium text-lg">
              Actions
            </h1>
          </div>
        </div>
        <div className="p-5">
          <UpdateModal product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
