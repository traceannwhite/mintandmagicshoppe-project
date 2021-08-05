import React, { useState } from "react";
// import Products from "../components/Products";
import Button from "../components/Button";

const Cart = (props) => {
  console.log("cart", props);

  const loadedProducts = () => {
    return props.cart.map((item, index) => {
      return (
        <div className="cart-container">
          <div className="cart-item">
            <img src={item.image} alt=""></img>
            <h1 className="name">{item.productName}</h1>
            {/* <Products
              image={item.image}
              productName={item.productName}
              key={item.id}
              removeFromCart={props.removeFromCart}
              label="Remove From Cart"
            /> */}
            <Button dispatch={props.removeFromCart} label="remove" />
          </div>
        </div>
      );
    });
  };

  const loading = () => {
    return <h1>No Items in Cart</h1>;
  };

  return props ? loadedProducts() : loading();
};

export default Cart;
