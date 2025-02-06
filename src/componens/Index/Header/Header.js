import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style_header.scss"
import Logo from "../Image/Logo";
import SearchIcon from "../Image/SearchIcon";
import MenuIcon from "../Image/MenuIcon";
import UserIcon from "../Image/UserIcon";
import TruckIcon from "../Image/TruckIcon";
import BarMenu from "../BarMenu/BarMenu";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
return (
  <header className="header container1">
    <div className="topNav container2">
    <div className="topNav-left">
    <Link to="/"><Logo /></Link>
      <button className="btn_a"><SearchIcon /></button>
        </div>
        <div className="topNav-right">
          <a href="#"><button onClick={openMenu} className="btn_a1 burger"><MenuIcon /></button></a>
          <a href="#"><button className="btn_a1"><UserIcon /></button></a>
          <Link to="/basket">
  <button className="btn_a1"><TruckIcon /><span className="header__count">5</span></button></Link>
        </div>
        
     </div>
     {/* Модальное окно */}
     {isMenuOpen && (
        <div className="menu-modal">
          <BarMenu closeMenu={closeMenu} />
          
        </div>
      )}
  </header>
);

}
export default Header;