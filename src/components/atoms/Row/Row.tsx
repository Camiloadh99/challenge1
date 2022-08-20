import React from "react";
import { IRow } from "./interface";
export default function Row(props: IRow) {
  const { children } = props;
  return <div className="row">{children}</div>;
}
