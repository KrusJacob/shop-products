import React, { FC } from "react";
import { useSelector } from "react-redux";
import { getProductCart } from "../store/selector";
import { IProduct } from "../types";
import CartProductItem from "./CartProductItem";

const CartProductsList: FC = () => {
  const products = useSelector(getProductCart);
  return (
    <div className="flex flex-wrap justify-start">
      {products.map((product: IProduct) => (
        <CartProductItem product={product} key={product.id} />
      ))}
      {!products.length && <div className="m-auto mt-5 text-xl">The cart is empty...</div>}
    </div>
  );
};

export default CartProductsList;
