import React, { FC, useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

import Cart from "../components/Cart";
import Filter from "../components/Filter/Filter";
import Modal from "../components/Modal";
import PaginatedItems from "../components/Pagination";
import ProductsList from "../components/ProductsList";

const ProductsPage: FC = () => {
  return (
    <>
      <Helmet>
        <title>Products Page</title>
      </Helmet>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="max-w-[1180px]  m-auto relative  px-4"
      >
        <h2 className="text-4xl font-medium my-10 text-center">Products</h2>
        <div className="flex">
          <Filter />
          <ProductsList />
          <Cart />
          <Modal />
        </div>
      </motion.section>
    </>
  );
};

export default ProductsPage;
