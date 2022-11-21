import React from "react";
import { NavLink } from "react-router-dom";
import Title from "./Title";

function Breadcrums() {
  return (
    <>
      <div className="breadcrums">
        <NavLink className="breadcrums__link" to="/newlist">
          Новости
        </NavLink>
        <Title title="Линия Сталина: суровый отдых в усадьбах на сутки" />
      </div>
    </>
  );
}

export default Breadcrums;
