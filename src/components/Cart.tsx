import React, { FC } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getLogin, getProductCart } from "../store/selector";

const Cart: FC = () => {
  const navigate = useNavigate();
  const login = useSelector(getLogin);
  // const getQuantity = useSelector(getProductQuantity);
  const quantity = useSelector(getProductCart).length;

  const onClickCart = () => {
    if (login) {
      navigate("/cart");
    } else {
      navigate("/login");
    }
  };

  return (
    <div
      title="Cart"
      className="fixed top-[5rem] right-4 bg-white rounded-full h-min p-4 border-2 flex cursor-pointer hover:shadow-xl transition-shadow z-50"
      onClick={() => onClickCart()}
    >
      <i className="large text-4xl material-icons">shopping_cart</i>
      <div className="border rounded-full w-7 h-7 absolute -bottom-2 left-0 flex justify-center items-center z-100 bg-amber-200 ">
        <span className="font-bold">{quantity}</span>
      </div>
    </div>
  );
};

export default Cart;
