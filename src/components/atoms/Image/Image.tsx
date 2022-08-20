import React from "react";
import { IImage } from "./interface";
export default function Image(props: IImage) {
  const { src, alt, style = {}, className = "" } = props;
  return <img src={src} alt={alt} style={style} className={className} />;
}
