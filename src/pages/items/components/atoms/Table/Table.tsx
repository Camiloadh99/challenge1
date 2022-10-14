import React from "react";
import { ITable } from "./interface";
export default function Table(props: ITable) {
  const { responsive = "xxl", className, style, children } = props;
  //   xxl xl lg md
  return (
    <div className={`table-responsive-${responsive}`}>
      <table className={`table ${className}`} style={style}>
        {children}
      </table>
    </div>
  );
}
