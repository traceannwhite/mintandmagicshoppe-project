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
  const handleToggle = () => {
    setMenuOpen((prev) => !prev);
  };
  const hideMenu = () => setMenuOpen(false);
  const showMenu = () => setMenuOpen(true);

  const navigation = [
    { link: "/", text: "Home" },
    { link: "/ShopProducts", text: "Shop Products" },
    { link: "/Cart", text: "My Cart" },
    { link: "/About", text: "About" },
    { link: "/Contact", text: "Contact" },
  ];

  return (
    <div className="header">
      <div className="nav-bar">
        {/* need an onClick event in the button to set the state */}
        <button className="menu-button" open={menuOpen} onClick={handleToggle}>
          {menuOpen ? "Close" : "Open"}
          {/* {toggleMenu ? "menu-button" : "menu-links"} */}
          {/* <img
            src="https://res.cloudinary.com/dhcagrzcb/image/upload/v1627864926/list_lsoefu.svg"
            alt=""
          ></img> */}
        </button>
        <ul className={`menu-links ${menuOpen ? " show-menu" : ""}`}>
          {navigation.map((nav) => (
            <li key={nav.text}>
              {/* need to add to the link itself so that you'll still go to new page when menu closes */}
              <Link
                to={nav.link}
                // onClick={menuOpen}
                // onBlur={hideMenu}
                // onFocus={showMenu}
              >
                {nav.text}
              </Link>
            </li>
          ))}
        </ul>
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
