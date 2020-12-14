import React from "react";
import "./header.css";
import "./medias.css";

import menu from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import bag from "../../assets/bag.png";

export default function Header() {
  return (
    <header>
      <div>
        <button className="menu">
          <img src={menu} alt="menu" />
        </button>
      </div>
      
      <div>
        <img className="logo" src={logo} alt="logo" />
      </div>

      <div>
        <button className="search">
          <img src={search} alt="menu" />
        </button>
      </div>

      <div>
        <button className="bag">
          <img src={bag} alt="bag" />
        </button>
      </div>
    </header>
  );
}
