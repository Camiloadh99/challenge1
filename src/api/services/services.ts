import { axios as http } from "frameworks_and_drivers/external_interfaces/Axios";
import { IGetRickMorty, IGetOneRickMorty } from "../interfaces/interfaz";
import config from "../../config/settings.json";
import HelpService from "../HelpService";
import { loadAbort } from "frameworks_and_drivers/helpers/loadAbortAxios";
const { BASE_URL } = config;
export const getCharacters = async (props: any) => {
  const { query } = props;
  const URL = `${BASE_URL}/character/?` + HelpService.getQueryString(query);
  const response = await http.get<IGetRickMorty>(URL);
  return response;
};

export const getOneCharacter = async (id: string) => {
  const URL = `${BASE_URL}/character/${id}`;
  const response = await http.get<IGetOneRickMorty>(URL);
  return response;
};
export const getCoolRick = (props: any) => {
  const controller = loadAbort();
  const { query } = props;
  const URL = `${BASE_URL}/character/1/?` + HelpService.getQueryString(query);
  const response = {
    call: http.get<IGetRickMorty>(URL, { signal: controller.signal }),
    controller,
  };
  return response;
};
