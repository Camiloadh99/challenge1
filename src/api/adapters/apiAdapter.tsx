import { ICurrentApi, IApi } from "api/interfaces/interfaz";
//interfaz = model
export const createAddapterApi = (apiResponse: ICurrentApi) => {
  const FormattedUser: IApi = {
    image: apiResponse.image,
    name: apiResponse.name,
    lastName: apiResponse.last_name, //?Cambio de respuesta de api a respuesta interna para solo modificar esta en caso de cambio
    species: apiResponse.species,
    id: apiResponse.id,
  };
  return FormattedUser;
};
