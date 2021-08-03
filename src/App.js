import "./App.css";
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import ShopProducts from "./pages/ShopProducts";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import "./components/default.scss";

function App() {
  //add state called cart
  const [cart, setCart] = useState([]);
  //add function called addToCart
  //addToCart will need to accept the product
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  //will push the product into the cart

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/ShopProducts">
          <ShopProducts addToCart={addToCart}/>
          {/* make addToCart function available to child (Shop Products) */}
        </Route>
        <Route path="/Cart">
          <Cart cart={cart} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
