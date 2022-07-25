import styled from "styled-components";

export const CardCharacter = styled.div`
  border-radius: 10px 10px 0 0;
  overflow: hidden;
`;
export const Text = styled.p`
  color: ${({ colorTheme }) => (colorTheme === "dark" ? "#fff" : null)};
`;
export const Image = styled.img``;
