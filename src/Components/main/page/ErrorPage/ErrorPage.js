import React from "react";

function ErrorPage() {
  return (
    <>
      <section className="error-page">
        <h1 className="error-page__title">Ошибка 404</h1>
        <p className="error-page__text">
          Возможно, у вас опечатка в адресе страницы, или её просто не
          существует
        </p>
        <a className="error-page__link" href="#">Вернуться на главную</a>
      </section>
    </>
  );
}

export default ErrorPage;
