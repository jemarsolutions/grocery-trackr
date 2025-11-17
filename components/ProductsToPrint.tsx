"use client";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

interface Product {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  price_per_unit: string;
}

interface ProductsToPrintProps {
  products: Product[];
}

const ProductsToPrint: React.FC<ProductsToPrintProps> = ({ products }) => {
  const printRef = useRef(null);

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: "To Buy List",
  });
  return (
    <>
      <div className="w-full overflow-y-auto overflow-x-auto h-60 mt-10">
        <div
          className="flex flex-col border border-gray-300  rounded-xl w-full overflow-hidden min-w-md"
          ref={printRef}
        >
          <div className="border-b border-gray-300 p-3 bg-purple-300 dark:bg-purple-700 flex items-center justify-between">
            <p className="font-bold">To Buy Products</p>
            <button
              onClick={handlePrint}
              className="inline-flex items-center justify-center px-6 py-2 text-black duration-300 dark:bg-yellow-300 bg-yellow-400 rounded-lg hover:bg-yellow-500 transition focus:ring focus:ring-purple-300 focus:ring-opacity-80 text-center"
            >
              Print
            </button>
          </div>
          <div className="p-5 bg-purple-100 dark:bg-purple-500">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex items-start justify-between p-2 not-last:border-b dark:text-white text-purple-950 border-gray-300 dark:even:bg-purple-600 even:bg-purple-300"
              >
                <div className="flex items-center justify-start gap-2">
                  <input type="checkbox" />
                  {product.name} - {product.quantity} {product.unit}
                </div>
                <p>Last price: {product.price_per_unit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsToPrint;
