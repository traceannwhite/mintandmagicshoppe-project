import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="icons">
        <div className="menu-icon">
          <img src="https://res.cloudinary.com/dhcagrzcb/image/upload/v1627864926/list_lsoefu.svg"></img>
        </div>
        <div className="title-img">
          <img src="https://res.cloudinary.com/dhcagrzcb/image/upload/v1627866428/Screen_Shot_2021-08-01_at_7.54.50_PM_xqqg7u.png"></img>
        </div>
        <div className="cauldron-icon">
          <Link to="/Cart">
            <img src="https://res.cloudinary.com/dhcagrzcb/image/upload/v1627866433/cauldron_vtbv4m.png"></img>
          </Link>
        </div>
      </div>
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
    </div>
  );
};

export default Header;
