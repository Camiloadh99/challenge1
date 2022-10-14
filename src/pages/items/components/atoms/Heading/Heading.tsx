import React from "react";
import { IHeading } from "./interface";
export default function Heading(props: IHeading) {
  const { style, className, id, name, type, children } = props;
  let headingHtml = (
    <h6 className={className} style={style} id={id}>
      {children}
    </h6>
  );
  switch (type) {
    case "h1":
      headingHtml = (
        <h1 className={className} style={style} id={id}>
          {children}
        </h1>
      );
      break;
    case "h2":
      headingHtml = (
        <h2 className={className} style={style} id={id}>
          {children}
        </h2>
      );
      break;
    case "h3":
      headingHtml = (
        <h3 className={className} style={style} id={id}>
          {children}
        </h3>
      );
      break;
    case "h4":
      headingHtml = (
        <h4 className={className} style={style} id={id}>
          {children}
        </h4>
      );
      break;
    case "h5":
      headingHtml = (
        <h5 className={className} style={style} id={id}>
          {children}
        </h5>
      );
      break;
    case "h6":
      headingHtml = (
        <h6 className={className} style={style} id={id}>
          {children}
        </h6>
      );
      break;
    case "p":
      headingHtml = (
        <p className={className} style={style} id={id}>
          {children}
        </p>
      );
      break;

    case "span":
      headingHtml = (
        <span className={className} style={style} id={id}>
          {children}
        </span>
      );
      break;
    default:
      headingHtml = (
        <h6 className={className} style={style} id={id}>
          {children}
        </h6>
      );
      break;
  }
  return headingHtml;
}
