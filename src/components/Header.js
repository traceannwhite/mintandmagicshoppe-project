import React, { useState } from "react";
import { Link } from "react-router-dom";

// Used this webpage to figure out how to restructure my navigation links as an array, map over them, and target my menu-button to upen and close in React: https://dev.to/nicm42/closing-a-navigation-menu-in-react-8ad

const Header = () => {
  // const menuButton = "menu-button";
  // const menu = "menu";
  // let menuOpen = false;
  // menuButton.on("click", (event) => {
  //   if (!menuOpen) {
  //     menuButton.addClass("open");
  //     menuOpen = true;
  //     menu.toggle(250);
  //   } else {
  //     menuButton.removeClass("open");
  //     menuOpen = false;
  //   }
  // });

  // set up useState and set the menu state to closed
  const [menuOpen, setMenuOpen] = useState(false);
  // update state when menu is open (! overrides )
  const toggleMenu = () => setMenuOpen(!menuOpen);
  //need an onClick event in the button to set the state
  //need to add to the link itself so that you'll still go to new page when menu closes
  // const hideMenu = () => setMenuOpen(false);
  // const showMenu = () => setMenuOpen(true);

  const navigation = [
    { link: "/", text: "Home" },
    { link: "/ShopProducts", text: "Shop Products" },
    { link: "/MyCart", text: "My Cart" },
    { link: "/About", text: "About" },
    { link: "/Contact", text: "Contact" },
  ];

  return (
    <div className="header">
      <div className="icons">
        <button className="menu-button" onClick={toggleMenu}>
          <img
            src="https://res.cloudinary.com/dhcagrzcb/image/upload/v1627864926/list_lsoefu.svg"
            alt=""
          ></img>
          <ul className="menu-links">
            {navigation.map((nav) => (
              <li key={nav.text}>
                <Link to={nav.link}>{nav.text}</Link>
              </li>
            ))}
          </ul>
        </button>
        <div className="title-img">
          <img
            src="https://res.cloudinary.com/dhcagrzcb/image/upload/v1627866428/Screen_Shot_2021-08-01_at_7.54.50_PM_xqqg7u.png"
            alt=""
          ></img>
        </div>
        <button className="cauldron-button">
          <Link to="/Cart">
            <img
              src="https://res.cloudinary.com/dhcagrzcb/image/upload/v1627866433/cauldron_vtbv4m.png"
              alt=""
            ></img>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
