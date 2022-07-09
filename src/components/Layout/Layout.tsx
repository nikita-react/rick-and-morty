import React from "react";
import Header from "../Header";
import { Content } from "./styled";
import { Container } from "../../mainStyled";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Content>
        <Container>
          <Outlet />
        </Container>
      </Content>
    </>
  );
};
export default Layout;
