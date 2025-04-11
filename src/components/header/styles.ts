import { theme } from "@/helpers/theme";
import styled from "styled-components";

export const Container = styled.div`
  height: 5rem;
  background-color: ${theme.background};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  box-shadow: 0 20px 40px rgba(204, 61, 61, 0.2);
  position: fixed;
  z-index: 2;
  width: 100%;
  top: 0;
`;

export const LogoIcon = styled.button`
  background-color: transparent;
  display: flex;
  justify-content: flex-start;
  border: none;
  cursor: pointer;
  @media (max-width: 1120px) {
    display: none;
  }
`;

export const MenuIcon = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media (min-width: 1120px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 1120px) {
    display: none;
  }
`;

export const Item = styled.div`
  cursor: pointer;
  padding: 25px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.primary};
  }
`;

export const ContainerButton = styled.div`
  margin-left: 30px;
`;

export const SidebarContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  z-index: 2;
  left: ${(props) => (props.$isOpen ? "0" : "-250px")};
  transition: left 0.3s ease-in-out;
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
`;
