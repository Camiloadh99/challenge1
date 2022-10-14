import React from "react";
import { ILoading } from "./interface";
import "./style.css";
export default function Loading(props: ILoading) {
  const {
    variant = "primary",
    animation = "border",
    size = "small",
    velocity = "fast",
  } = props;
  return (
    <div
      className={`spinner-${animation} text-${variant} size-${size} velocity-${velocity}`}
    ></div>
  );
}
