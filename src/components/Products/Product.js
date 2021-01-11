import React from "react";

const Product = ({ product }) => {
  return (
    <div
      style={{
        color: "black",
      }}
    >
      {product.proName}
    </div>
  );
};

export default Product;
