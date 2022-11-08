import React from "react";
import "./style.css";
export default function Loading() {
  return (
    <div className="hourglass">
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 43.8 72.7"
      >
        <path
          className="st0"
          d="M21.9,36.4c0,0-19.4-3-19.4-22.4V2.5h38.8V14C41.3,33.4,21.9,36.4,21.9,36.4z"
        />
        <path
          className="st1"
          d="M21.9,30.6C18.6,29.8,8.2,26.4,8.2,14V8.2h27.5V14C35.6,26.4,25.1,29.8,21.9,30.6z"
        />
        <path
          className="st0"
          d="M21.9,36.4c0,0-19.4,3-19.4,22.4v11.5h38.8V58.7C41.3,39.4,21.9,36.4,21.9,36.4z"
        />
        <path
          className="st2"
          d="M8.2,64.5v-5.8c0-12.5,10.6-15.9,13.7-16.6c3.3,0.8,13.7,4.2,13.7,16.6v5.8H8.2z"
        />
      </svg>
    </div>
  );
}
