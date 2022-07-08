import React from "react";
import { HeaderNavigation, List, Item, Wrapper } from "./styled";
import { Container, LinkStyled } from "../../mainStyled";
import Image from "../Image";
import logo from "../../images/Rick-and-Morty__svg-logo.svg";
const Header: React.FC = () => {
  return (
    <HeaderNavigation>
      <Container>
        <Wrapper>
          <LinkStyled to="/">
            <Image imageSrc={logo} width={"120px"} />
          </LinkStyled>
          <List>
            <Item>
              <LinkStyled to="/character">Character</LinkStyled>
            </Item>
            <Item>
              <LinkStyled to="/location">Location</LinkStyled>
            </Item>
            <Item>
              <LinkStyled to="/episode">Episode</LinkStyled>
            </Item>
          </List>
        </Wrapper>
      </Container>
    </HeaderNavigation>
  );
};

export default Header;
