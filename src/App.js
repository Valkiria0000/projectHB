import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/header/Header";
import ErrorPage from "./Components/main/page/ErrorPage/ErrorPage";
import NewsList from "./Components/main/page/NewsListPage/NewsList";
import News from "./Components/main/page/NewsPage/News";

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
      link: "/errorpage",
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
        <main className="main">
          <Routes>
            <Route path="/" component={News} />
            <Route path="/" component={NewsList} />
            <Route path="/*" component={ErrorPage} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
