import React, { FC, useEffect } from "react";

import { useSelector } from "react-redux";
import { useActions } from "../hooks/actions";
import { useFetchProductsQuery } from "../store/product/product.api";
import { getFilterCategory } from "../store/selector";
import { IProduct } from "../types";
import Loader from "./Loader";
import ProductItem from "./ProductItem";
import PaginatedItems from "./Pagination";
import { filterProduct } from "../utils/filterProduct";

const ProductsList: FC = () => {
  const { data: products = [], isLoading, isError } = useFetchProductsQuery("");

  const { category, minPrice, maxPrice, popularSwitch, ratingSwitch } = useSelector(getFilterCategory);
  const { resetAllFilters } = useActions();

  useEffect(() => {
    resetAllFilters();
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <div className="m-auto text-2xl text-red-500">Fetch error</div>;
  }

  const sortedProduct = filterProduct({ products, category, minPrice, maxPrice, popularSwitch, ratingSwitch });

  if (sortedProduct.length === 0) {
    return <div className="m-auto text-2xl">Products not found</div>;
  }

  return <PaginatedItems products={sortedProduct} itemsPerPage={6} />;
};

export default ProductsList;
