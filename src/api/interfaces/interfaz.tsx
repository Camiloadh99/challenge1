export interface IGetRickMorty {
  info: any;
  results: [
    {
      image: any;
      name: string;
      last_name: string;
      species: string;
      id: string;
    }
  ];
}
export interface ICurrentApi {
  image: any;
  name: string;
  last_name: string;
  species: string;
  id: string;
}

export interface IApi {
  image: any;
  name: string;
  lastName: string;
  species: string;
  id: string;
}

export interface IGetOneRickMorty {
  image: any;
  name: string;
  last_name: string;
  species: string;
  id: string;
}
