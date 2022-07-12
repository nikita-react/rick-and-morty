import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  max-width: 1044px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  display: ${({ display }) => (display ? display : null)};
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : null};
  flex-grow: ${({ flexGrow }) => (flexGrow ? 1 : null)};
`;

export const LinkStyled = styled(Link)``;

export const RenderWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(236px, 1fr));
  grid-gap: 20px;
  justify-items: center;
`;
