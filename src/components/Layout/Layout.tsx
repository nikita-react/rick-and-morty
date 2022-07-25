import React from "react";
import Header from "../Header";
import { Content, Wrapper } from "./styled";
import { Container } from "../../mainStyled";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { useRecoilValue } from "recoil";
import { theme } from "../../atoms";

const Layout: React.FC = () => {
  const themeState = useRecoilValue(theme);
  return (
    <Wrapper themeState={themeState}>
      <Header />
      <motion.div
        initial={{ x: "-300px", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
      >
        <Content>
          <Container flexGrow={1} display={"flex"} flexDirection={"column"}>
            <Outlet />
          </Container>
        </Content>
      </motion.div>
    </Wrapper>
  );
};
export default Layout;
