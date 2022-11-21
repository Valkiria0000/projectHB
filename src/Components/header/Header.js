import React from "react";
import { Outlet } from "react-router-dom";
import NavMenu from "./items/NavMenu";
import NavPage from "./items/NavPage";
function Header(props) {
  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <nav className="header__navPage">
            <NavPage navPage={props.data.navPage} />
          </nav>
        </div>
        <nav className="header__navMenu">
          <NavMenu navMenu={props.data.navMenu} />
        </nav>
      </header>
    </>
  );
}

export default Header;
