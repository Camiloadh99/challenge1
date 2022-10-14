import React from "react";
import { IAlert } from "./interface";
export default function Alert(props: IAlert) {
  const { variant = "primary", className, style, label, show } = props;
  return (
    <div>
      {show && (
        <div className={`alert-${variant} ${className}`} style={style}>
          {label}
        </div>
      )}
    </div>
  );
}
