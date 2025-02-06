import React from "react";
import "./style_bar.scss";

const BarMenu = ({ closeMenu }) => {
  return (
    <div className="menu-container">
        <div className="menu-container__content">
          <div className="menu-container__content_allMenu"><button onClick={closeMenu} className="menu-container__content_allMenu_btn">X</button>
            <h1 className="menu-container__content_allMenu_h1">MENU</h1>
            
            <div className="menu-container__content_allMenu_select">
              <h2 className="menu-container__content_allMenu_select_h2">MAN</h2>
              <div className="menu-container__content_allMenu_select_paragraf">
                <p className="menu-container__content_allMenu_select_paragraf_p">Accessories</p>
                <p className="menu-container__content_allMenu_select_paragraf_p">Bags</p>
                <p className="menu-container__content_allMenu_select_paragraf_p">Denim</p>
                <p className="menu-container__content_allMenu_select_paragraf_p">T-Shirts</p>
              </div>
            </div>
            <div className="menu-container__content_allMenu_select">
              <h2 className="menu-container__content_allMenu_select_h2">WOMAN</h2>
              <div className="menu-container__content_allMenu_select_paragraf">
                <p className="menu-container__content_allMenu_select_paragraf_p">Accessories</p>
                <p className="menu-container__content_allMenu_select_paragraf_p">Jackets & Coats</p>
                <p className="menu-container__content_allMenu_select_paragraf_p">Polos</p>
                <p className="menu-container__content_allMenu_select_paragraf_p">T-Shirts</p>
                <p className="menu-container__content_allMenu_select_paragraf_p">Shirts</p>
              </div>
            </div>
          <div className="menu-container__content_allMenu_select">
              <h2 className="menu-container__content_allMenu_select_h2">KIDS</h2>
              <div className="menu-container__content_allMenu_select_paragraf">
                <p className="menu-container__content_allMenu_select_paragraf_p">Accessories</p>
                <p className="menu-container__content_allMenu_select_paragraf_p">Jackets & Coats</p>
                <p className="menu-container__content_allMenu_select_paragraf_p">Polos</p>
                <p className="menu-container__content_allMenu_select_paragraf_p">T-Shirts</p>
                <p className="menu-container__content_allMenu_select_paragraf_p">Shirts</p>
                <p className="menu-container__content_allMenu_select_paragraf_p">Bags</p>
                </div>
              </div>
            </div>

        </div>
    </div>
         

  );
};
export default BarMenu;