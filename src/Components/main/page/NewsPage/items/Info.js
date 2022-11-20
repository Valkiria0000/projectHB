import React from "react";
import Social from "./Social";

function Info(props) {
  return (
    <div className="news__info">
      <time>{props.data}</time>
      <Social />
    </div>
  );
}

export default Info;
