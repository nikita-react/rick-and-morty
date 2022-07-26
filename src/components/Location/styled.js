import styled from "styled-components";

export const List = styled.ul`
  padding-left: 10px;
  flex-grow: 1;
  margin-bottom: 20px;
`;

export const Item = styled.li`
  padding: 10px 0;
  transition: all 0.3s;
  color: ${({ themeState }) => (themeState === "dark" ? "#fff" : null)};
  background-color: ${({ themeState }) =>
    themeState === "dark" ? "#303135" : null};
  &:nth-child(odd) {
    background-color: #dcdcdc;
    color: #444;
  }
`;
export const Text = styled.p`
  text-align: center;
  color: ${({ themeState }) => (themeState === "dark" ? "#fff" : null)};
`;
export const Img = styled.img``;
