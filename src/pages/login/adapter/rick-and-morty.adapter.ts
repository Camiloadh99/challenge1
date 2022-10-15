import { User, ApiUser } from "models";

export const RickAndMortyAdapterLogin = (user: ApiUser): User => {
  return {
    id: user.id,
    name: user.name,
    status: user.status,
    species: user.species,
    token: user.name,
  };
};
