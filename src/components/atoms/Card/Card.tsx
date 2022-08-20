import React from "react";
import { ICard } from "./interface";
export default function Card(props: ICard) {
  const { className = "", style = {}, children } = props;
  return (
    <div className={`card ${className}`} style={style}>
      {children}
    </div>
  );
}
