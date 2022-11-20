function NavPage(props) {
  let data = props.navPage;
  const listItem = data.map((item) => (
    <li>
      <a href={item.link}>{item.text}</a>
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
