import { atom } from "recoil";

export const charactersState = atom<any[]>({
  key: "characters",
  default: [],
});

export const locationsState = atom<any[]>({
  key: "locations",
  default: [],
});

export const episodesState = atom<any[]>({
  key: "episodes",
  default: [],
});
