import React from "react";
import Header from "./Components/header/Header";
import News from "./Components/content/page/NewsPage/News";
import NewsList from "./Components/content/page/NewsListPage/NewsList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const headerData = {
  navPage: [
    { link: "#", text: "Главная" },
    {
      link: "/newslist",
      text: "Новости",
    },
    {
      link: "/news",
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
            <Route path="/news" element={<News />} />
            <Route path="/newslist" element={<NewsList />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
