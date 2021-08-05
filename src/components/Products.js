import React from "react";
import Button from "./Button";

const Products = (props) => {
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
              <Button
                product={product}
                dispatch={props.addToCart}
                label="Add to Cart"
              />
            </div>
          );
        })}
      </div>
    );
  };
  const loading = () => {
    return <h1>Products Page Not Working</h1>;
  };

  return props.products ? loaded() : loading();
};

export default Products;

// Received TypeError: cannot read property 'map' of undefined.
