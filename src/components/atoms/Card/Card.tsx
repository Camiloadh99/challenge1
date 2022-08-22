import React from "react";
import { ICard } from "./interface";
export default function Card(props: ICard) {
  const { className = "", style = {}, children, id, name } = props;
  return (
    <div id={id} className={`card ${className}`} style={style}>
      {children}
    </div>
  );
}
