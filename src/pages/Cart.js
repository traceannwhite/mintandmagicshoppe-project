import React, { useState } from "react";
// import CartTotal from "../components/CartTotal";
import Products from "../components/Products";
import Button from "../components/Button";

//added a loaded/loading structure to attempt to
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
  // const loadedProducts = () => {
  //   // map over when is returned from shop products
  // return props.cart.map((item, index) => {
  //   return (
  // <div className="cart-container" key={index}>
  //   <div className="cart-item">
  {
    /* return item image and name for cart */
  }
  {
    /* <img src={item.image} alt=""></img>
            <h1 className="name">{item.productName}</h1> */
  }
  {
    /* removeFromCart button */
  }
  {
    /* <Products
              products={item}
              key={item.id}
              // removeFromCart={props.removeFromCart}
              label="Remove from Cart"
            /> */
  }
  //         </div>
  //       </div>
  //     );
  //   });
  // };
  const loading = () => {
    return <h1>No Items in Cart</h1>;
  };

  return props ? loadedProducts() : loading();
};

export default Cart;
