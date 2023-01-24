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
import { useAppSelector } from "../../hooks";

interface HeaderProps {
  switcherState: boolean;
  setSwitcherState: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ switcherState, setSwitcherState }) => {
  const themeState = useAppSelector((state) => state.theme.default);

  const changeTheme = (e: ChangeEvent<HTMLInputElement>) => {
    setSwitcherState(e.target.checked);
    if (e.target.checked) {
      localStorage.setItem(
        "changedTheme",
        JSON.stringify({
          color: "dark",
          switcher: true,
        })
      );
    } else {
      localStorage.setItem(
        "changedTheme",
        JSON.stringify({
          color: "light",
          switcher: false,
        })
      );
    }
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
                  checked={switcherState}
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
