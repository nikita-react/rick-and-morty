import React from "react";
import { CardCharacter, Text } from "./styled";
import Image from "../Image";

interface CharacterProps {
  character: CharacterObject;
}
interface CharacterObject {
  name: string;
  image: string;
}
const Character: React.FC<CharacterProps> = ({ character }) => {
  const { name, image } = character;

  return (
    <CardCharacter>
      <Image imageSrc={image} width={"250px"} />
      <Text>{name}</Text>
    </CardCharacter>
  );
};

export default Character;
