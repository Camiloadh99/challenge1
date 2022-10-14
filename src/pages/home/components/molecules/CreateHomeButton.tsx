import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../atoms";
import { createUser } from "redux/slices/user.slice";
import { UserEmptyState } from "models";
import { getOneMorty } from "../../services";

export default function CreateHomeButton() {
  const dispatch = useDispatch();
  const [morty, setMorty] = useState(UserEmptyState);

  const getMorty = async (character: number) => {
    try {
      const response = await getOneMorty(character, {});
      setMorty(response);
      return response;
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  useEffect(() => {
    (async () => {
      await getMorty(2);
    })();
  }, []);

  const dispatchAction = () => {
    dispatch(createUser(morty));
  };

  return <Button label="Create action" onClick={dispatchAction}></Button>;
}
