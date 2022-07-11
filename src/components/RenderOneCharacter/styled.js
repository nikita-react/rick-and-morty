import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  max-width: 760px;
  margin: 0 auto;
  padding: 20px 0;
`;

export const Image = styled.img``;

export const List = styled.ul`
  padding-left: 10px;
  flex-grow: 1;
`;

export const Item = styled.li`
  padding: 10px 0;
  &:nth-child(odd) {
    background-color: #dcdcdc;
  }
`;
