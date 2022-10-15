import React from "react";
import {
  CreateHomeButton,
  ResetHomeButton,
  ModifyHomeButton,
} from "./components";
import "./style/style.css";

export default function Home() {
  return (
    <div className="home-div">
      <h2>Hello World</h2>
      <div className="center">
        <CreateHomeButton />
        <ModifyHomeButton />
        <ResetHomeButton />
      </div>
    </div>
  );
}
