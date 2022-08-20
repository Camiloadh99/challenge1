import React from "react";
import { IButton } from "./interface";
import "./style.css";
export default function Button(props: IButton) {
  const {
    onClick,
    disabled,
    type = "button",
    variant = "primary",
    outlined,
    size = "large",
    className = "",
    style = {},
    label = "Button",
  } = props;
  //   variant text contained outlined

  let typeButton = `${variant}`;
  if (outlined) {
    typeButton = `btn-outline-${variant}`;
  }
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`button-stl ${typeButton} ${size} ${className}`}
      style={style}
    >
      {label}
    </button>
  );
}
