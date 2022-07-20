import styled from "styled-components";

export const List = styled.ul`
  padding-left: 10px;
  flex-grow: 1;
  margin-bottom: 20px;
`;

export const Item = styled.li`
  padding: 10px 0;
  &:nth-child(odd) {
    background-color: #dcdcdc;
  }
`;

export const Img = styled.img``;
