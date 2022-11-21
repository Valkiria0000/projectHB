import React from "react";
import Breadcrums from "./Breadcrums";
import Info from "./Info";

function HeaderNews() {
  return (
    <>
      <Breadcrums />
      <h1>Линия Сталина: суровый отдых в усадьбах на сутки </h1>
      <Info data="14 января 2008" />
    </>
  );
}

export default HeaderNews;
