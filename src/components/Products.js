import React from "react";
import AddButton from "./AddButton";

const Products = (props) => {
  // console.log("Products", props);
  const loaded = () => {
    return (
      <div className="product-container">
        {props.products.map((product, index) => {
          return (
            <div className="product-card" key={index}>
              <img src={product.image} alt=""></img>
              <h1 className="name">{product.productName}</h1>
              <p className="desc">{product.description}</p>
              <div className="price">${product.price}</div>
              <AddButton
                dispatch={props.addToCart}
                product={product}
                label="Add to Cart"
              />
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
