import React from "react";
import NavMenu from "./items/NavMenu";
import NavPage from "./items/NavPage";
function Header(props) {
  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="header__navPage">
            <NavPage navPage={props.data.navPage} />
          </nav>

          <nav className="header__navMenu">
            <NavMenu navMenu={props.data.navMenu} />
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
