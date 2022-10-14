import React from "react";
import {
  CreateHomeButton,
  ResetHomeButton,
  ModifyHomeButton,
} from "./components";
import "./style/style.css";

export default function Home() {
  return (
    <div>
      <h2>Hello World</h2>
      <CreateHomeButton />
      <ModifyHomeButton />
      <ResetHomeButton />
    </div>
  );
}
