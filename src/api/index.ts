const LOCATIONS_URL: string = "https://rickandmortyapi.com/api/location";
const EPISODES_URL: string = "https://rickandmortyapi.com/api/episode";
const CHARACTERS_URL: string = "https://rickandmortyapi.com/api/character";

const api = {
  characters: {
    getCharacters: (): Promise<any> =>
      fetch(CHARACTERS_URL).then((res) => res.json()),
  },
  locations: {
    getLocations: (): Promise<any> =>
      fetch(LOCATIONS_URL).then((res) => res.json()),
  },
  episodes: {
    getLocations: (): Promise<any> =>
      fetch(EPISODES_URL).then((res) => res.json()),
  },
};

export default api;
