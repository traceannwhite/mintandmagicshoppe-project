import React from "react";

const Products = (props) => {
  // console.log("Products", props);
  const loaded = () => {
    return (
      <div className="product-container">
        {props.products.map((product, index) => {
          return (<div>{product.productName}</div>
        })}
      </div>
    );
  };
  const loading = () => {
    return <h1>No List to Display</h1>;
  };

  return props ? loaded() : loading();
};

export default Products;

// Received TypeError: cannot read property 'map' of undefined.
