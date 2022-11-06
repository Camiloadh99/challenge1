import { axios as http } from "frameworks_and_drivers/external_interfaces/Axios";
import { IGetOneRickMorty } from "../models/interfaz";
import config from "../../../config/settings.json";
import HelpService from "utilities/HelpService";
import { loadAbort } from "utilities/loadAbortAxios";
const { BASE_URL } = config;

export const getCoolRick = (props: any) => {
  const controller = loadAbort();
  const { query } = props;
  const URL = `${BASE_URL}/character/1/?` + HelpService.getQueryString(query);
  const response = {
    call: http.get<IGetOneRickMorty>(URL, { signal: controller.signal }),
    controller,
  };
  return response;
};
