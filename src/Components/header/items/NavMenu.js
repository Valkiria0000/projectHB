import React from "react";
import { Link, Outlet } from "react-router-dom";

function NavMenu(props) {
  let data = props.navMenu;
  const menuItem = data.map((item) => (
    <li>
      <Link to={item.link}>{item.text}</Link>
      <Outlet />
    </li>
  ));
  return (
    <>
      <img src="../image/logo.svg" alt="" />
      <ul className="nav">{menuItem}</ul>
      <button className="nav__button">+ Разместить объявление</button>
    </>
  );
}
export default NavMenu;
