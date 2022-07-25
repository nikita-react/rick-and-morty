import styled from "styled-components";

export const Content = styled.div`
  padding: 20px 0;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ themeState }) =>
    themeState === "dark" ? "#303135" : "white"};
  transition: background-color 0.3s;
`;
