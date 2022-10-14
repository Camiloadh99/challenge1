import { AxiosResponse } from "frameworks_and_drivers/external_interfaces/Axios";

export interface AxiosCall<T> {
  call: Promise<AxiosResponse<T>>;
  controller?: AbortController;
}

export interface IApi {
  created: string;
  episode: string[];
  gender: string;
  location: {
    name: string;
    url: string;
  };
  origin: {
    name: string;
    url: string;
  };
  image: any;
  name: string;
  lastName: string; //ejemplo
  species: string;
  id: string;
}

export interface ICurrentApi {
  created: string;
  episode: string[];
  gender: string;
  location: {
    name: string;
    url: string;
  };
  origin: {
    name: string;
    url: string;
  };
  image: string;
  name: string;
  last_name: string; //ejemplo
  species: string;
  id: string;
}

export interface IGetOneRickMorty {
  created: string;
  episode: string[];
  gender: string;
  location: {
    name: string;
    url: string;
  };
  origin: {
    name: string;
    url: string;
  };
  image: string;
  name: string;
  last_name: string; //ejemplo
  species: string;
  id: string;
}
