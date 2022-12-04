import React from "react";
import { FaSistrix } from "react-icons/fa";
import classes from "./button.module.scss";
function SearchButton(props) {
  return (
    <>
      <button className={classes.button}>
        <FaSistrix />
      </button>
    </>
  );
}

export default SearchButton;
