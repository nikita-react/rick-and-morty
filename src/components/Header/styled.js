import styled from "styled-components";

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
