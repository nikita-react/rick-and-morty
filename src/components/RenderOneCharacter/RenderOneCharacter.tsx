import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Wrapper, Image, List, Item } from "./styled";
import { GetCharacter } from "../../queries/characters";
import { useQuery } from "@apollo/client";
import Loading from "../Loading";

const RenderOneCharacter: React.FC = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState<any>({});
  const { data, loading, error } = useQuery(GetCharacter, {
    variables: { id: id },
  });

  useEffect(() => {
    if (data) {
      setCharacter(data.character);
    }
  }, [loading]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <p>Sorry, please reload the page</p>
      ) : (
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
      )}
    </>
  );
};

export default RenderOneCharacter;
