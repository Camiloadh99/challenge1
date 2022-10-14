import { ICurrentApi, IApi } from "pages/items/models/interfaz";
//interfaz = model
export const createAddapterApi = (apiResponse: ICurrentApi) => {
  const FormattedUser: IApi = {
    created: apiResponse.created,
    episode: apiResponse.episode,
    gender: apiResponse.gender,
    location: {
      name: apiResponse.location.name,
      url: apiResponse.location.url,
    },
    origin: {
      name: apiResponse.origin.name,
      url: apiResponse.origin.url,
    },
    image: apiResponse.image,
    name: apiResponse.name,
    lastName: apiResponse.last_name, //?Cambio de respuesta de api a respuesta interna para solo modificar esta en caso de cambio
    species: apiResponse.species,
    id: apiResponse.id,
  };
  return FormattedUser;
};
