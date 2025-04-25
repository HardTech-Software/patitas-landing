import React from "react";
import {
  Container,
  ContainerButton,
  Item,
  LogoIcon,
  MenuIcon,
  Nav,
  Overlay,
  SidebarContainer,
} from "./styles";
import Icon from "../icon";
import Typography from "../typography";
import { headerHeight, navItems } from "@/utils/constants/nav-items";
import Button from "../button";
import Sidebar from "../sidebar";
import useToggle from "@/hooks/use-toggle";

const Header = () => {
  const { OpenSidebar, isSidebarOpen, CloseSidebar } = useToggle();
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - headerHeight;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      {!isSidebarOpen && (
        <Container>
          <LogoIcon style={{}}>
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
              <Button />
            </ContainerButton>
          </Nav>
        </Container>
      )}

      <SidebarContainer $isOpen={isSidebarOpen}>
        {isSidebarOpen && (
          <>
            <Sidebar onClick={CloseSidebar} scrollToSection={scrollToSection} />
            <Overlay onClick={CloseSidebar} />
          </>
        )}
      </SidebarContainer>
    </>
  );
};

export default Header;
