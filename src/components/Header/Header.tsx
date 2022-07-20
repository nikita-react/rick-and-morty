import React from "react";
import { HeaderNavigation, List, Item, Wrapper, Image } from "./styled";
import { Container, LinkStyled } from "../../mainStyled";
import logo from "../../images/Rick-and-Morty__svg-logo.svg";
const Header: React.FC = () => {
  return (
    <HeaderNavigation>
      <Container>
        <Wrapper>
          <LinkStyled to="/">
            <Image src={logo} />
          </LinkStyled>
          <List>
            <Item>
              <LinkStyled to="character/page=1">Character</LinkStyled>
            </Item>
            <Item>
              <LinkStyled to="location/page=1">Location</LinkStyled>
            </Item>
            <Item>
              <LinkStyled to="episode">Episode</LinkStyled>
            </Item>
          </List>
        </Wrapper>
      </Container>
    </HeaderNavigation>
  );
};

export default Header;
