import React from "react";
import Header from "./Components/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./Components/main/page/ErrorPage/ErrorPage";
import BlockPost from "./Components/main/page/NewsList/BlockPost";
const headerData = {
  navPage: [
    { link: "#", text: "Главная" },
    {
      link: "/blockpost",
      text: "Новости",
    },
    {
      link: "#",
      text: "Размещение и тарифы ",
    },
    {
      link: "#",
      text: "Объявления на карте",
    },
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
      <BrowserRouter>
        <Header data={headerData} />
        <main>
          <Routes>
            <Route path="blockpost" element={<BlockPost />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
