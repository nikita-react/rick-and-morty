import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  max-width: 760px;
  width: 100%;
  margin: 0 auto;
  padding: 20px 0;
`;

export const Image = styled.img``;

export const List = styled.ul`
  padding-left: 10px;
  flex-grow: 1;
`;

export const Item = styled.li`
  padding: 10px 5px 10px 10px;
  transition: all 0.3s;
  color: ${({ themeState }) => (themeState === "dark" ? "#fff" : null)};
  background-color: ${({ themeState }) =>
    themeState === "dark" ? "#303135" : null};
  &:nth-child(odd) {
    background-color: #dcdcdc;
    color: #444;
  }
`;
