function NavMenu(props) {
  let data = props.navMenu;
  const menuItem = data.map((item) => (
    <li>
      <a href={item.link}>{item.text}</a>
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
