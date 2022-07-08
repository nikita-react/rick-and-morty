import React, { useEffect, useState } from "react";
import { Wrapper } from "./styled";
import Character from "../Character";
import api from "../../api";

const RenderCharacters: React.FC = () => {
  const [characters, setCharacters] = useState<any[]>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await api.characters.getCharacters();
      const { results } = data;
      setCharacters(results);
    };
    getData();
  }, []);

  return (
    <Wrapper>
      {characters &&
        characters.map((character) => (
          <Character key={character.id} character={character} />
        ))}
    </Wrapper>
  );
};

export default RenderCharacters;
