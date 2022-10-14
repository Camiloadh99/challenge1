import React from "react";
import { Button } from "../atoms";
import { useDispatch } from "react-redux";
import { modifyUser } from "redux/slices/user.slice";

export default function ModifyHomeButton() {
  const dispatch = useDispatch();
  const dispatchAction = () => {
    dispatch(modifyUser({ name: "Camilo update" }));
  };

  return <Button label="Modify action" onClick={dispatchAction}></Button>;
}
