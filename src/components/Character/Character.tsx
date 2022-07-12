import React from "react";
import { CardCharacter, Text, Image } from "./styled";
import { LinkStyled } from "../../mainStyled";

interface CharacterProps {
  character: {
    name: string;
    image: string;
    id: string;
  };
}

const Character: React.FC<CharacterProps> = ({ character }) => {
  const { name, image, id } = character;

  return (
    <LinkStyled to={`/character/${id}`}>
      <CardCharacter>
        <Image src={image} />
        <Text>{name}</Text>
      </CardCharacter>
    </LinkStyled>
  );
};

export default Character;
