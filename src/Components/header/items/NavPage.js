import React from "react";
import { Link } from "react-router-dom";

function NavPage(props) {
  let data = props.navPage;
  const listItem = data.map((item) => (
    <li>
      <Link to={item.link}>{item.text}</Link>
    </li>
  ));
  return (
    <>
      <ul className="nav">{listItem}</ul>
      <div className="header__account">
        <a href="#">Вход и регистрация</a>
      </div>
    </>
  );
}
export default NavPage;
