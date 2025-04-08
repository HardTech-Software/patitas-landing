import React from "react";
import { Container, Item, Nav } from "./styles";
import Icon from "../icon";
import Typography from "../typography";
import { navItems } from "@/utils/constants/nav-items";

const Header = () => {
  return (
    <Container>
      <Icon name="logo" />

      <Nav>
        {navItems.map((item, index) => (
          <Item key={index}>
            <Typography variant="title2">{item.label}</Typography>
          </Item>
        ))}
        <Typography>Descarga la app</Typography>
      </Nav>
    </Container>
  );
};

export default Header;
