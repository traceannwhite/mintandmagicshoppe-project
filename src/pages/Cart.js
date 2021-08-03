import { cargo } from "async";
import React, { useState } from "react";
import Products from "../components/Products";

const Cart = (props) => {
  // console.log("cart", props);
  // const onAdd = (product) => {
  //   const exist = cartItems.find(x => x.id === product.id);
  //   if(exist) {
  //     setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty +1} : x
  //       )
  //     )
  //     } else {
  //       setCartItems([...cartItems, {...product, qty: 1}])
  //     }
  //   }
  // }
  // map over when is returned from shop products
  return props.cart.map((item, index) => {
    return (
      <div className="cart-item">
        {/* return item name and image */}
        {/* {item.includes.Asset[index].fields.file.url} */}
        <img src={item.image} alt=""></img>
        <h1 className="name">{item.productName}</h1>
        {/* removeFromCart button */}
      </div>
    );
  });
};

export default Cart;
