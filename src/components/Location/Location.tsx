import React from "react";
import { List, Item } from "./styled";

interface LocationTypes {
  location: {
    name: string;
    type: string;
    dimension: string;
    residents: [];
  };
}
const Location: React.FC<LocationTypes> = ({ location }) => {
  const { residents } = location;
  const arrayOfImages =
    residents && residents.map((resident: any) => resident.split("/").pop());
  console.log(arrayOfImages);

  return (
    <List>
      <Item>name: {location.name}</Item>
      <Item>type: {location.type}</Item>
      <Item>dimension: {location.dimension}</Item>
      <Item>
        residents:{" "}
        {arrayOfImages &&
          arrayOfImages.map((id) => (
            <img
              key={id}
              src={`https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`}
              alt=""
            />
          ))}
      </Item>
    </List>
  );
};

export default Location;
