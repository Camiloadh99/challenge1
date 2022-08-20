import { axios as http } from "../frameworks_and_drivers/Axios";
import { IGetRickMorty, IGetOneRickMorty } from "./interfaz";
import { BASE_URL } from "../config/settings.json";

export const getCharacters = async () => {
  const URL = `${BASE_URL}/character`;
  const response = await http.get<IGetRickMorty>(URL);
  return response;
};

export const getOneCharacter = async (id: string) => {
  const URL = `${BASE_URL}/character/${id}`;
  const response = await http.get<IGetOneRickMorty>(URL);
  return response;
};
