import React from "react";
import "./style.css";
import { ICard } from "./interface";
export default function Card(props: ICard) {
  const { className = "", style = {}, children, id, name } = props;
  return (
    <div id={id} className={`card-home ${className}`} style={style}>
      {children}
    </div>
  );
}
