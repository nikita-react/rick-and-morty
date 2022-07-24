import { gql } from "@apollo/client";

export const GetAllCharacters = gql`
  {
    characters {
      results {
        name
      }
    }
  }
`;
