import React from "react";
import { Container, ContainerButton, Item, Nav } from "./styles";
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
      <Nav>
        {navItems.map((item, index) => (
          <Item
            key={index}
            onClick={() => {
              onClick();
              scrollToSection(item.sectionId);
            }}
          >
            <Typography variant="description" color="white">
              {item.label}
            </Typography>
          </Item>
        ))}
        <ContainerButton>
          <Button title="Descargar App" variant="secondary" />
        </ContainerButton>
      </Nav>
    </Container>
  );
};

export default Sidebar;
