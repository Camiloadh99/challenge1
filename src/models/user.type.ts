export interface User {
  id: number;
  name: string;
  status: string;
  species: string;
}

interface IUserAssociatedUrl {
  name: string;
  url: string;
}

export interface ApiUser {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: IUserAssociatedUrl;
  location: IUserAssociatedUrl;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

const EmptyAssociationUrl = {
  name: "",
  url: "",
};

export const UserEmptyState: User = {
  id: 0,
  name: "",
  status: "",
  species: "",
};
