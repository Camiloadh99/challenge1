import React from "react";
import { IButtonHome } from "./models/button.model";
import "./style.css";
export default function Button({ label, onClick }: IButtonHome) {
  return (
    <button className="home-button" onClick={onClick}>
      {label}
    </button>
  );
}
