import { axios as http } from "frameworks_and_drivers/external_interfaces/Axios";
import { IGetRickMorty, IGetOneRickMorty } from "../interfaces/interfaz";
import { BASE_URL } from "config/settings.json";
import HelpService from "../HelpService";

export const getCharacters = async (props: any) => {
  const { query } = props;
  const URL = `${BASE_URL}/character?` + HelpService.getQueryString(query);
  const response = await http.get<IGetRickMorty>(URL);
  return response;
};

export const getOneCharacter = async (id: string) => {
  const URL = `${BASE_URL}/character/${id}`;
  const response = await http.get<IGetOneRickMorty>(URL);
  return response;
};
