import React, { useState, ChangeEvent } from "react";
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
import { theme } from "../../atoms";
import { useRecoilState } from "recoil";

const Header: React.FC = () => {
  const [themeState, setThemeState] = useRecoilState(theme);

  const changeTheme = (e: ChangeEvent<HTMLInputElement>) => {
    const changedTheme = e.target.checked;
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
                <Switch onChange={changeTheme} />
              </Item>
            </List>
          </Wrapper>
        </Container>
      </HeaderNavigation>
    </HeaderStyled>
  );
};

export default Header;
