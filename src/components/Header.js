import React, { useState } from "react";
import { Link } from "react-router-dom";

// Used a combination of these webpages to figure out how to restructure my navigation links as an array, map over them, and target my menu-button to upen and close in React:
// https://dev.to/nicm42/closing-a-navigation-menu-in-react-8ad
// https://ibaslogic.com/how-to-add-hamburger-menu-in-react/

const Header = () => {
  // set up useState and set the menu state to closed
  const [menuOpen, setMenuOpen] = useState(false);
  // update state when menu is open (! overrides )
  const handleToggle = () => {
    setMenuOpen((prev) => !prev);
  };
  const hideMenu = () => setMenuOpen(false);

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
          {menuOpen ? (
            "X"
          ) : (
            <img
              src="https://res.cloudinary.com/dhcagrzcb/image/upload/v1627864926/list_lsoefu.svg"
              alt=""
              className="hamburger"
            ></img>
          )}
        </button>
        <ul className={`menu-links ${menuOpen ? " show-menu" : ""}`}>
          {navigation.map((nav) => (
            <li key={nav.text}>
              {/* need to add to the link itself so that you'll still go to new page when menu closes */}
              <Link
                to={nav.link}
                activeClassName="active-link"
                onClick={() => hideMenu()}
                exact
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
