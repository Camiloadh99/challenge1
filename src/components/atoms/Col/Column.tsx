import React, { Children } from "react";
import { ICol } from "./interface";
export default function Column(props: ICol) {
  const { size, xl, lg, md, style = {}, className = "", children } = props;
  let gridClass = "col-12";
  if (size) {
    gridClass = `col-${size}`;
  }
  if (xl) {
    gridClass = `col-xl-${xl}`;
  }
  if (lg) {
    gridClass = `col-lg-${lg}`;
  }
  if (md) {
    gridClass = `col-md-${md}`;
  }
  if (size && xl) {
    gridClass = `col-${size} col-xl-${xl}`;
  }
  if (size && lg) {
    gridClass = `col-${size} col-lg-${lg}`;
  }
  if (size && md) {
    gridClass = `col-${size} col-md-${md}`;
  }
  return (
    <div className={`${gridClass} ${className}`} style={style}>
      {children}
    </div>
  );
}
