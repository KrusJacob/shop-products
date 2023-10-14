import React, { FC, useState } from "react";
import { IProduct } from "../types";
import ProductItem from "./ProductItem";

interface CartProductItemProps {
  product: IProduct;
  inCart?: boolean;
}

const CartProductItem: FC<CartProductItemProps> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div className="h-[680px] border m-1  p-4 flex flex-col justify-between bg-gradient-to-b to-blue-300 from-white shadow-md">
      <ProductItem product={product} inCart={true} />
      <div>
        <p className="text-center w-full my-3 font-medium text-slate-700">Set the quantity</p>
        <div className="flex rounded">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? prev : prev - 1))}
            className="border w-3/12 text-xl font-bold bg-slate-100 hover:bg-slate-300 transition-all"
          >
            &mdash;
          </button>
          <input
            value={quantity}
            className="border text-center text-xl py-2 w-6/12"
            type="text"
            min={1}
            readOnly
          />
          <button
            onClick={() => setQuantity((prev) => prev + 1)}
            className="border font-bold text-2xl w-3/12 bg-slate-100 hover:bg-slate-300 transition-all"
          >
            &#xff0b;
          </button>
        </div>
        <div className="mt-2 flex">
          <span className="px-4 py-2 font-medium w-1/2 text-center text-2xl">
            {(product.price * quantity).toFixed(2)}$
          </span>
          <button className="px-4 py-2 w-1/2 border-black border bg-yellow-400 rounded text-xl btnShadowInner">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProductItem;
