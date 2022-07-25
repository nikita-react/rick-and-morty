import React from "react";
import { CardCharacter, Text, Image } from "./styled";
import { LinkStyled } from "../../mainStyled";
import { useRecoilValue } from "recoil";
import { theme } from "../../atoms";

interface CharacterProps {
  character: {
    name: string;
    image: string;
    id: string;
  };
}

const Character: React.FC<CharacterProps> = ({ character }) => {
  const { name, image, id } = character;
  const themeState = useRecoilValue(theme);

  return (
    <LinkStyled to={`/character/${id}`}>
      <CardCharacter>
        <Image src={image} />
        <Text colorTheme={themeState}>{name}</Text>
      </CardCharacter>
    </LinkStyled>
  );
};

export default Character;
