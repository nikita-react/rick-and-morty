import React from "react";
import Header from "../Header";
import { Content } from "./styled";
import { Container } from "../../mainStyled";

const Layout: React.FC<{ children?: JSX.Element }> = ({ children }) => {
  return (
    <>
      <Header />
      <Content>
        <Container>{children}</Container>
      </Content>
    </>
  );
};
export default Layout;
