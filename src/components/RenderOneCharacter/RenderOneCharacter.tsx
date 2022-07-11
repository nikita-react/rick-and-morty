import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Wrapper, Image, List, Item } from "./styled";
import api from "../../api";

const RenderOneCharacter: React.FC = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState<any>({});

  useEffect(() => {
    const getData = async () => {
      const obj = await api.characters.getOneCharacter(id);
      setCharacter(obj);
    };
    getData();
  }, []);

  return (
    <Wrapper>
      <Image src={character.image} />
      <List>
        <Item>name: {character.name}</Item>
        <Item>status: {character.status}</Item>
        <Item>spicies: {character.species}</Item>
        <Item>gender: {character.gender}</Item>
        <Item>type: {character.type}</Item>
        {character.location !== undefined && (
          <Item>location: {character.location.name}</Item>
        )}
      </List>
    </Wrapper>
  );
};

export default RenderOneCharacter;
