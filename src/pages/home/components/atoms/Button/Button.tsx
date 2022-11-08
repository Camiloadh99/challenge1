import React from "react";
import { IButtonHome } from "./models/button.model";
import "./style.css";
export default function Button({ label, onClick }: IButtonHome) {
  return (
    <input
      className="button-stl btn-outline-success"
      onClick={onClick}
      type="submit"
      value={label}
    ></input>
  );
}
