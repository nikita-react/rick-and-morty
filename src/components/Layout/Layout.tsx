import React, { useState, useEffect } from "react";
import Header from "../Header";
import { Content, Wrapper } from "./styled";
import { Container } from "../../mainStyled";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { theme, switchState } from "../../atoms";
import { useRecoilState } from "recoil";

const Layout: React.FC = () => {
  const [themeState, setThemeState] = useRecoilState(theme);
  const [checked, setSwithState] = useRecoilState(switchState);
  const [mounted, setMounted] = useState(false);

  const setTheme = (status: boolean) => {
    setSwithState(status);
    status ? setThemeState("dark") : setThemeState("light");
  };

  useEffect(() => {
    const themeStatus = JSON.parse(localStorage.getItem("changedTheme") || "");
    setTheme(themeStatus);
    setMounted(true);
  }, []);

  return (
    <>
      {mounted ? (
        <Wrapper themeState={themeState}>
          <Header checked={checked} setTheme={setTheme} />
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
      ) : null}
    </>
  );
};
export default Layout;
