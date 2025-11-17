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
    <div
      ref={printRef}
      className="flex flex-col border border-gray-300 rounded-xl shadow-xl w-full"
    >
      <div className="border-b border-gray-300 p-3">To Buy Products</div>
      <div className="p-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-between p-2 not-last:border-b border-gray-300"
          >
            <p>
              {product.name} - {product.quantity} {product.unit}
            </p>
            <p>Last price: {product.price_per_unit}</p>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-300 p-3 flex justify-center">
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <button
            onClick={handlePrint}
            className="inline-flex items-center justify-center px-6 py-2 text-black duration-300 dark:bg-yellow-300 bg-yellow-400 rounded-lg hover:bg-yellow-500 transition focus:ring focus:ring-purple-300 focus:ring-opacity-80 text-center"
          >
            Print
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsToPrint;
