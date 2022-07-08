const LOCATIONS_URL: string = "https://rickandmortyapi.com/api/location";
const EPISODES_URL: string = "https://rickandmortyapi.com/api/episode";
const CHARACTERS: string = "https://rickandmortyapi.com/api/character";

const api = {
  characters: {
    getCharacters: (): Promise<any> =>
      fetch(CHARACTERS).then((res) => res.json()),
  },
};

export default api;
