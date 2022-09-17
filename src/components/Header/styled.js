import styled from "styled-components";

export const HeaderStyled = styled.header``;
export const HeaderNavigation = styled.nav`
  padding: 10px 0;
  border-bottom: 1px solid rgba(46, 41, 51, 0.08);
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Item = styled.li`
  margin: 0 5px;
  &:last-child {
    margin-right: 0;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Image = styled.img`
  width: auto;
  height: 37px;

  filter: ${({ colorImg }) =>
    colorImg === "dark"
      ? "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(5562%) hue-rotate(179deg) brightness(121%) contrast(112%)"
      : null};
`;
