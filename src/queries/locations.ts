import { gql } from "@apollo/client";

export const GetLocationAndCount = gql`
  query ($id: ID!) {
    location(id: $id) {
      name
      type
      dimension
      residents {
        image
        id
        name
      }
    }
    locations {
      info {
        count
      }
    }
  }
`;
