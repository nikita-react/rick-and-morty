import React, { ChangeEvent } from "react";
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
import { useRecoilValue } from "recoil";
import { theme } from "../../atoms";

interface HeaderProps {
  checked: boolean;
  setTheme: any;
}
const Header: React.FC<HeaderProps> = ({ checked, setTheme }) => {
  const themeState = useRecoilValue(theme);
  const changeTheme = (e: ChangeEvent<HTMLInputElement>) => {
    const changedTheme = e.target.checked;
    localStorage.setItem("changedTheme", JSON.stringify(changedTheme));
    setTheme(changedTheme);
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
