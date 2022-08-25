export interface IGetRickMorty {
  info: any;
  results: [
    {
      image: any;
      name: string;
      species: string;
      id: string;
    }
  ];
}

export interface IGetOneRickMorty {
  image: any;
  name: string;
  species: string;
  id: string;
}
