import React from "react";

const Products = (props) => {
  // console.log("Products", props);
  const loaded = () => {
    return (
      <div className="product-container">
        {props.products.map((product, index) => {
          return (
            <div className="product-card" key={index}>
              <div className="name">{product.productName}</div>
              <div className="img">{product.image}</div>
              <div className="desc">{product.description}</div>
              <div className="price">{product.price}</div>
              <button className="add-to-cart">Add To Cart</button>
            </div>
          );
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
