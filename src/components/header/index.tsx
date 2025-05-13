import React from "react";
import {
  Container,
  ContainerButton,
  ContainerInner,
  Item,
  LogoIcon,
  MenuIcon,
  Nav,
  Overlay,
  SidebarContainer,
} from "./styles";
import Icon from "../icon";
import Typography from "../typography";
import { navItems, scrollToSection } from "@/utils/constants/nav-items";
import Button from "../button";
import Sidebar from "../sidebar";
import useToggle from "@/hooks/use-toggle";

const Header = () => {
  const { OpenSidebar, isSidebarOpen, CloseSidebar } = useToggle();

  return (
    <>
      <Container>
        <ContainerInner>
          <LogoIcon onClick={() => scrollToSection("home-section")}>
            <Icon name="logo" />
          </LogoIcon>
          <MenuIcon onClick={OpenSidebar}>
            <Icon name="menu" />
          </MenuIcon>

          <Nav>
            {navItems.map((item, index) => (
              <Item key={index} onClick={() => scrollToSection(item.sectionId)}>
                <Typography variant="title2">{item.label}</Typography>
              </Item>
            ))}
            <ContainerButton>
              <Button title="Descargar App" />
            </ContainerButton>
          </Nav>

          <SidebarContainer $isOpen={isSidebarOpen}>
            {isSidebarOpen && (
              <>
                <Sidebar
                  onClick={CloseSidebar}
                  scrollToSection={scrollToSection}
                />
                <Overlay onClick={CloseSidebar} />
              </>
            )}
          </SidebarContainer>
        </ContainerInner>
      </Container>
    </>
  );
};

export default Header;
