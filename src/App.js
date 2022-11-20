import React from "react";
import Header from "./Components/header/Header";
import Main from "./Components/main/Main";
const headerData = {
  navPage: [
    { link: "#", text: "Главная" },
    { link: "#", text: "Новости" },
    { link: "#", text: "Размещение и тарифы " },
    { link: "#", text: "Объявления на карте" },
    { link: "#", text: "Контакты" },
    { link: "#", text: "Закладки" },
  ],
  navMenu: [
    { link: "#", text: "Квартиры на сутки" },
    { link: "#", text: "Коттеджи и усадьбы" },
    { link: "#", text: "Бани и Сауны" },
    { link: "#", text: "Авто напрокат" },
  ],
};

function App() {
  return (
    <>
      <Header data={headerData} />
      <Main />
    </>
  );
}

export default App;
