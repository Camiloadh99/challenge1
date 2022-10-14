import React from "react";
import { IButtonHome } from "./models/button.model";
export default function Button({ label, onClick }: IButtonHome) {
  return <button onClick={onClick}>{label}</button>;
}
