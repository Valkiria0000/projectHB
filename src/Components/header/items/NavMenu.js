import React from "react";
import { Link } from "react-router-dom";
import Button from "./../../UI/button/Button";
function NavMenu(props) {
  let data = props.navMenu;
  const menuItem = data.map((item) => (
    <li>
      <Link to={item.link}>{item.text}</Link>
    </li>
  ));
  return (
    <>
      <img src="../image/logo.svg" alt="" />
      <ul className="nav">{menuItem}</ul>
      <Button>+ Разместить объявление</Button>
    </>
  );
}
export default NavMenu;
