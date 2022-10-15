import { PrivateRoutes } from "models";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "redux/slices/user.slice";
import { getLoginMorty } from "../services";

export default function CreateLoginButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = async () => {
    try {
      const response = await getLoginMorty(2, {});
      dispatch(createUser(response));
      navigate(`/${PrivateRoutes.ITEMS}`, { replace: true });
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  return <button onClick={login}>LOGIN</button>;
}
