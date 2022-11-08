import React from "react";
import Loading from "components/atoms/Loading/Loading";
import "./style.css";
import { ICompleteLoader } from "./interface";
export default function CompleteLoader(props: ICompleteLoader) {
  const { show } = props;
  const showLoader = show ? { display: "block" } : { display: "none" };
  return (
    <div id="loaderFullWith" style={showLoader}>
      <div className="loader loaderFullWith">
        <Loading></Loading>
      </div>
    </div>
  );
}
