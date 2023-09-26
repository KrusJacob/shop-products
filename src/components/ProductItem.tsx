import React, { FC, useState } from "react";
import toast from "react-hot-toast";
import { useActions } from "../hooks/actions";
import { IProduct } from "../types";

interface ProductItemProps {
  product: IProduct;
  inCart?: boolean;
}

const ProductItem: FC<ProductItemProps> = ({ product, inCart }) => {
  const [details, setDetails] = useState<boolean>(false);

  const { addProductCart, removeProductCart, showModal } = useActions();

  const onAddProductCart = () => {
    toast.success("The product has been added to the card");
    addProductCart(product);
  };

  const onRemoveProductCart = () => {
    toast.success("The product has been removed from cart");
    removeProductCart(product.id);
  };

  return (
    <div className="border w-[260px] mb-3 mx-2 p-4 flex flex-col justify-between bg-white relative overflow-hidden rounded hover:shadow-lg transition-shadow ">
      <div className="m-auto">
        <img
          onClick={() => showModal(product.image)}
          className="mt-10 w-full max-h-[280px] cursor-pointer"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="mt-5">
        <p>{product.title}</p>
        <div className="flex justify-between mt-2 items-center">
          <p className="inline-block font-medium text-xl">{product.price}$</p>
          <button
            onClick={() => setDetails((prev) => !prev)}
            className="w-[110px] py-2 z-50 rounded border bg-[var(--mainColor)] btnShadowInner"
          >
            {details ? "Back" : "Description"}
          </button>
        </div>
      </div>
      <div
        title={inCart ? "remove from cart " : "add to cart"}
        className={
          (inCart ? "hover:bg-red-500 " : "hover:bg-green-500 ") +
          " absolute top-2 right-2 rounded-full flex p-2 border-2 cursor-pointer hover:text-white transition-all"
        }
        onClick={() => (inCart ? onRemoveProductCart() : onAddProductCart())}
      >
        <i className="large  material-icons">{inCart ? "delete" : "add_shopping_cart"}</i>
      </div>
      {details && <ProductDetails product={product} />}
    </div>
  );
};

const ProductDetails: FC<ProductItemProps> = ({ product }) => {
  return (
    <div className="absolute inset-0 bg-black opacity-80 transition-all p-5 animate-show overflow-y-scroll hideScrollBar">
      <p className="text-white  mt-5">{product.description}</p>
      <p className="text-white font-medium text-lg mt-5">Rating: {product.rating.rate}</p>
    </div>
  );
};

export default ProductItem;
