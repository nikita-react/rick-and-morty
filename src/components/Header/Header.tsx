import React, { useState, ChangeEvent, useEffect } from "react";
import {
  HeaderStyled,
  HeaderNavigation,
  List,
  Item,
  Wrapper,
  Image,
} from "./styled";
import { Container, LinkStyled } from "../../mainStyled";
import logo from "../../images/Rick-and-Morty__svg-logo.svg";
import Switch from "../SwitchButton";
import { theme, switchState } from "../../atoms";
import { useRecoilState } from "recoil";
import { useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();
  const [themeState, setThemeState] = useRecoilState(theme);
  const [checked, setSwithState] = useRecoilState(switchState);

  const setTheme = (status: boolean) => {
    setSwithState(status);
    status ? setThemeState("dark") : setThemeState("light");
  };

  const changeTheme = (e: ChangeEvent<HTMLInputElement>) => {
    const changedTheme = e.target.checked;
    localStorage.setItem("changedTheme", JSON.stringify(changedTheme));
    setTheme(changedTheme);
  };

  useEffect(() => {
    const themeStatus = JSON.parse(localStorage.getItem("changedTheme") || "");
    if (themeStatus != null || undefined) {
      setTheme(themeStatus);
    }
  }, []);
  return (
    <HeaderStyled>
      <HeaderNavigation>
        <Container>
          <Wrapper>
            <LinkStyled to="/">
              <Image colorImg={themeState} src={logo} />
            </LinkStyled>
            <List>
              <Item>
                <LinkStyled colortheme={themeState} to="character/page=1">
                  <span>Character</span>
                </LinkStyled>
              </Item>
              <Item>
                <LinkStyled colortheme={themeState} to="location/page=1">
                  Location
                </LinkStyled>
              </Item>
              <Item>
                <LinkStyled colortheme={themeState} to="episode">
                  Episode
                </LinkStyled>
              </Item>
              <Item>
                <Switch
                  checked={checked}
                  onChange={changeTheme}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </Item>
            </List>
          </Wrapper>
        </Container>
      </HeaderNavigation>
    </HeaderStyled>
  );
};

export default Header;
