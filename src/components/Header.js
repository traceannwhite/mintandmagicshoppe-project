import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="menu">
      <Link to="/">
        <div className="menu-item home">Home</div>
      </Link>
      <Link to="/ShopProducts">
        <div className="menu-item products">Shop Products</div>
      </Link>
      <Link to="/Cart">
        <div className="menu-item cart">My Cart</div>
      </Link>
      <Link to="/">
        <div className="menu-item about">About</div>
      </Link>
      <Link to="/">
        <div className="menu-item home">Contact Us</div>
      </Link>
    </div>
  );
};

export default Header;
