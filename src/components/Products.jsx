import React from "react";
import productsData from "./../data/products";

const Products = () => {
  return (
    <ul>
      {productsData.map(({ id, name, inStock }) => (
        <li key={id}>
          {name}&nbsp;
          <small style={inStock ? { color: "blue" } : { color: "red" }}>
            {inStock ? "(in-stock)" : "(not in-stock)"}
          </small>
        </li>
      ))}
    </ul>
  );
};

export default Products;
