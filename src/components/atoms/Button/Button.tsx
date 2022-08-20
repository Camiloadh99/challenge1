import React from "react";
import { IButton } from "./interface";
import "./style.css";
export default function Button(props: IButton) {
  const {
    onClick,
    disabled,
    type = "button",
    variant = "contained",
    color = "",
    size = "large",
    className = "",
    style = {},
    label = "Button",
  } = props;
  //   variant text contained outlined
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`button-stl button-${variant} ${color} ${size} ${className}`}
      style={style}
    >
      {label}
    </button>
  );
}
