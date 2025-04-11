import React from "react";
import { Container, ContainerButton, Item, LogoIcon, Nav } from "./styles";
import Icon from "../icon";
import { navItems } from "@/utils/constants/nav-items";
import Typography from "../typography";
import Button from "../button";

interface SidebarProps {
  onClick: () => void;
  scrollToSection: (sectionId: string) => void;
}
const Sidebar = ({ onClick, scrollToSection }: SidebarProps) => {
  return (
    <Container>
      <LogoIcon>
        <Icon name="logo" />
      </LogoIcon>

      <Nav>
        {navItems.map((item, index) => (
          <Item
            key={index}
            onClick={() => {
              onClick();
              scrollToSection(item.sectionId);
            }}
          >
            <Typography variant="title2">{item.label}</Typography>
          </Item>
        ))}
        <ContainerButton>
          <Button />
        </ContainerButton>
      </Nav>
    </Container>
  );
};

export default Sidebar;
