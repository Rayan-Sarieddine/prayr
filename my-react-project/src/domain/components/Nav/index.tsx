import React from "react";
import "./style.css";
import { AiOutlineShopping as ShoppingIcon } from "react-icons/ai";
import { AiOutlineGlobal as GlobeIcon } from "react-icons/ai";
import { GiHamburgerMenu as BurgerIcon } from "react-icons/gi";
function Nav() {
  return (
    <div className="nav">
      <div className="nav-language_toggle">
        <BurgerIcon className="nav-burger_icon" />
        <GlobeIcon className="nav-globe_icon" />
        <p>EN | Arabic</p>
      </div>
      <div className="nav-logo">
        <img src="./prayr-logo.png" alt="prayr_logo" />
      </div>
      <div className="nav-cta">
        <div className="nav-cta_cart">
          <ShoppingIcon className="nav-cta_cart_icon" />

          <p>Cart</p>
        </div>
        <button className="btn">Buy</button>
      </div>
    </div>
  );
}

export default Nav;
