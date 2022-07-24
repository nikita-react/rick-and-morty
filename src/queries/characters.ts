import { gql } from "@apollo/client";

export const GetAllCharacters = gql`
  query ($page: Int) {
    characters(page: $page) {
      results {
        name
        image
        id
      }
      info {
        pages
      }
    }
  }
`;

export const GetCharacter = gql`
  query ($id: ID!) {
    character(id: $id) {
      name
      image
      id
      species
      gender
      type
      location {
        name
      }
    }
  }
`;
