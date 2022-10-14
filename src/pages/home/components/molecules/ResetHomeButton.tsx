import React from "react";
import { Button } from "../atoms";
import { useDispatch } from "react-redux";
import { resetUser } from "redux/slices/user.slice";

export default function ResetHomeButton() {
  const dispatch = useDispatch();
  const dispatchAction = () => {
    dispatch(resetUser());
  };

  return <Button label="Reset action" onClick={dispatchAction}></Button>;
}
