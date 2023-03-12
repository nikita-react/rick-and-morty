import React, { useState, useEffect } from "react";
import Header from "../Header";
import { Content, Wrapper } from "./styled";
import { Container } from "../../mainStyled";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { changeTheme } from "../../store/themeSlice";

const Layout: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const themeState = useAppSelector((state) => state.theme.default);
  const dispatch = useAppDispatch();
  const [switcherState, setSwitcherState] = useState<boolean>(false);

  useEffect(() => {
    const themeStatus: any = localStorage.getItem("changedTheme");

    if (themeStatus) {
      const { color, switcher } = JSON.parse(themeStatus);
      dispatch(changeTheme(color));
      setSwitcherState(switcher);
    }

    setMounted(true);
  }, [switcherState]);

  return (
    <>
      {mounted ? (
        <Wrapper themeState={themeState}>
          <Header
            setSwitcherState={setSwitcherState}
            switcherState={switcherState}
          />
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
