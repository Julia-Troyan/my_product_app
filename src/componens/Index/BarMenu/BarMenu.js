import React, { useState } from "react";
import "./style_bar.scss";

const BarMenu = ({ closeMenu }) => {
  return (
    <div className="menu-active">
        <h1 className="menu-active__h1">MENU</h1>
        <button className="menu-close" onClick={closeMenu}>X</button>
        <div className="headline"><h2>MAN</h2>
          <div className="headline__p">
          <p>Accessories</p>
          <p>Bags</p>
          <p>Denim</p>
          <p>T-Shirts</p>
          </div>
        </div>
        <div className="headline"><h2>WOMAN</h2>
          <div className="headline__p">
          <p>Accessories</p>
          <p>Jackets & Coats</p>
          <p>Polos</p>
          <p>T-Shirts</p>
          <p>Shirts</p>
          </div>
        </div>
        <div className="headline"><h2>KIDS</h2>
          <div className="headline__p">
          <p>Accessories</p>
          <p>Jackets & Coats</p>
          <p>Polos</p>
          <p>T-Shirts</p>
          <p>Shirts</p>
          <p>Bags</p>
          </div>
        </div>
    </div>
         

  );
};
export default BarMenu;