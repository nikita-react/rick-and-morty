import React from "react";
import Header from "../Header";
import { Content, Wrapper } from "./styled";
import { Container } from "../../mainStyled";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <Content>
        <Container flexGrow={1} display={"flex"} flexDirection={"column"}>
          <Outlet />
        </Container>
      </Content>
    </Wrapper>
  );
};
export default Layout;
