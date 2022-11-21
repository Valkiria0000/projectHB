import React from "react";

import Title from "./Title";

function Breadcrums() {
  return (
    <>
      <div className="breadcrums">
        <a className="breadcrums__link" href="#">
          Новости
        </a>
        <Title title="Линия Сталина: суровый отдых в усадьбах на сутки" />
      </div>
    </>
  );
}

export default Breadcrums;
