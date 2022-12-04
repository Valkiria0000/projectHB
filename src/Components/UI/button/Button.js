import React from "react";
import classes from "./button.module.scss";
function Button(props) {
  return (
    <>
      <button className={classes.button}>{props.children}</button>
    </>
  );
}

export default Button;
