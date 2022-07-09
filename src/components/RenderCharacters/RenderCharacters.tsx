import React, { useEffect } from "react";
import Character from "../Character";
import api from "../../api";
import { useRecoilState } from "recoil";
import { charactersState } from "../../atoms";
import { RenderWrapper } from "../../mainStyled";

const RenderCharacters: React.FC = () => {
  const [characters, setCharacters] = useRecoilState(charactersState);

  useEffect(() => {
    const getData = async () => {
      const data = await api.characters.getCharacters();
      const { results } = data;
      setCharacters(results);
    };
    getData();
  }, []);

  return (
    <RenderWrapper>
      {characters &&
        characters.map((character) => (
          <Character key={character.id} character={character} />
        ))}
    </RenderWrapper>
  );
};

export default RenderCharacters;
