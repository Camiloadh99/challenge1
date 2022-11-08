import React from "react";
import "./style.css";

interface IBackground {
  children: React.ReactNode;
}

export default function Background({ children }: IBackground) {
  return (
    <div className="page__background page__background--over total-page">
      {children}
      <h6 className="author">Created by @Camiloadh99</h6>
    </div>
  );
}
