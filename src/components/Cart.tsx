import React, { FC } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getLogin } from "../store/selector";

const Cart: FC = () => {
  const navigate = useNavigate();
  const login = useSelector(getLogin);

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
      className="fixed top-[5rem] right-4 rounded-full h-min p-4 border-2 flex cursor-pointer hover:shadow-xl transition-shadow"
      onClick={() => onClickCart()}
    >
      <i className="large text-4xl material-icons">shopping_cart</i>
    </div>
  );
};

export default Cart;
