import React from "react";
import {
  CreateHomeButton,
  ResetHomeButton,
  ModifyHomeButton,
} from "./components";
import "./style/style.css";
import { useParams } from "react-router-dom";
import { AppStore } from "redux/store";
import { useSelector } from "react-redux";
export default function Home() {
  const { id } = useParams();
  const user = useSelector((state: AppStore) => state.user);
  return (
    <div className="home-div">
      <span className="redux-headings">{user.id}</span>
      <span className="redux-headings">{user.name}</span>
      <div className="redux-headings">
        {JSON.stringify(user)}
        <div className="pt-4">
          <a style={{ margin: "0 auto" }} href="/home">
            <button>Redux</button>
          </a>
        </div>
      </div>
      <h2>Hello World {id} </h2>
      <div className="center">
        <CreateHomeButton />
        <ModifyHomeButton />
        <ResetHomeButton />
      </div>
    </div>
  );
}
