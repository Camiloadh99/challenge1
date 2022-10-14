import config from "../../../config/settings.json";

import { axios as http } from "frameworks_and_drivers/external_interfaces/Axios";
import HelpService from "helpers/HelpService";
import { RickAndMortyAdapter } from "../adapter";
import { ApiUser } from "models";
const { BASE_URL } = config;
// export const getAllMorty = async (props?: any) => {
//   const { query } = props;
//   const URL = `${BASE_URL}/character/?` + HelpService.getQueryString(query);
//   const response = await http.get(URL);
//   return response;
// };

export const getOneMorty = async (character: number, props?: any) => {
  const { query } = props;
  const URL =
    `${BASE_URL}/character/${character}?` + HelpService.getQueryString(query);
  const response = await http.get<ApiUser>(URL);
  return RickAndMortyAdapter(response.data);
};
