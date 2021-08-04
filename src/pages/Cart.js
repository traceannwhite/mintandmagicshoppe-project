// import { cargo } from "async";
import React, { useState } from "react";

//added a loaded/loading structure to attempt to
const Cart = (props) => {
  const loaded = () => {
    // map over when is returned from shop products
    return props.cart.map((item, index) => {
      return (
        <div className="cart-container">
          <div className="cart-item">
            {/* return item image and name for cart */}
            <img src={item.image} alt=""></img>
            <h1 className="name">{item.productName}</h1>
            {/* removeFromCart button */}
          </div>
        </div>
      );
    });
  };
  const loading = () => {
    return <h1>No List to Display</h1>;
  };

  return props ? loaded() : loading();
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
};

export default Cart;
