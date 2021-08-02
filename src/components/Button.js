import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <Link to="/ShopProducts">
      <button className="shop">Explore</button>
    </Link>
  );
};

export default Button;
