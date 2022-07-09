import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  max-width: 1044px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const LinkStyled = styled(Link)``;

export const RenderWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(236px, 1fr));
  grid-gap: 20px;
  justify-items: center;
  padding: 20px 0;
`;
