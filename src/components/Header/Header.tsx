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

const Header: React.FC = () => {
  const [themeState, setThemeState] = useRecoilState(theme);
  const [checked, setSwithState] = useRecoilState(switchState);

  const changeTheme = (e: ChangeEvent<HTMLInputElement>) => {
    const changedTheme = e.target.checked;
    setSwithState(changedTheme);
    changedTheme ? setThemeState("dark") : setThemeState("light");
  };

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
                  Character
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
