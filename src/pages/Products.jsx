import React from "react";
import { customFetch } from "../utils";
import { useLoaderData } from "react-router-dom";
import { Filters, PaginationContainer, ProductsContainer } from "../components";

const url = "/products";

export const loader = async () => {
  const response = await customFetch(url);
  return { products: response.data.data, meta: response.data.meta };
};

const Products = () => {
  const { products, meta } = useLoaderData();

  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};

export default Products;
