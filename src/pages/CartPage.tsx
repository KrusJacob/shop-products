import React, { FC, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import CartProductsList from "../components/CartProductsList";
import Modal from "../components/Modal";
import { getLogin } from "../store/selector";

const CartPage: FC = () => {
  const login = useSelector(getLogin);
  const navigate = useNavigate();

  useEffect(() => {
    if (!login) {
      navigate("/login");
    }
  });

  return (
    <>
      <Helmet>
        <title>Cart</title>
      </Helmet>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="max-w-[1330px] m-auto  px-4 pb-12"
      >
        <p className="text-4xl font-medium my-10 text-center">Produtcs in the cart</p>
        <CartProductsList />
        <Modal />
      </motion.section>
    </>
  );
};

export default CartPage;
