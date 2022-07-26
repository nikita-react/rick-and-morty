import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Wrapper, Image, List, Item } from "./styled";
import { GetCharacter } from "../../queries/characters";
import { useQuery } from "@apollo/client";
import Loading from "../Loading";
import { useRecoilValue } from "recoil";
import { theme } from "../../atoms";

const RenderOneCharacter: React.FC = () => {
  const { id } = useParams();
  const themeState = useRecoilValue(theme);

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
            <Item themeState={themeState}>name: {character.name}</Item>
            <Item themeState={themeState}>status: {character.status}</Item>
            <Item themeState={themeState}>spicies: {character.species}</Item>
            <Item themeState={themeState}>gender: {character.gender}</Item>
            <Item themeState={themeState}>type: {character.type}</Item>
            {character.location !== undefined && (
              <Item themeState={themeState}>
                location: {character.location.name}
              </Item>
            )}
          </List>
        </Wrapper>
      )}
    </>
  );
};

export default RenderOneCharacter;
