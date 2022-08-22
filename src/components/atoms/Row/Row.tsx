import React from "react";
import { IRow } from "./interface";
export default function Row(props: IRow) {
  const { children, id, className, style } = props;
  return (
    <div id={id} className={`row ${className ? className : ""}`} style={style}>
      {children}
    </div>
  );
}
