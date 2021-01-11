import React from "react";
import Product from "./Product";

const Products = ({ products }) => {
  return (
    <ul>
      {products.map((product) => {
        return (
          <li key={product.id}>
            <Product product={product}></Product>
          </li>
        );
      })}
    </ul>
  );
};

export default Products;
