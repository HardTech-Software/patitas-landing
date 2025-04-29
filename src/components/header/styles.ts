import { theme } from "@/helpers/theme";
import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(#e59a9a 40%, transparent 100%);
  display: flex;
  height: 9.5rem;
  position: fixed;
  z-index: 2;
  width: 100%;
  top: 0;
`;

export const ContainerInner = styled.div`
  height: 4.5rem;
  background-color: ${theme.background};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  margin: 1.8rem 2rem;
  width: 100%;
  border-radius: 50px;
  position: relative;

  @media (max-width: 1120px) {
    padding: 0 1rem;
    margin: 1.8rem 1rem;
  }
`;

export const LogoIcon = styled.button`
  background-color: transparent;
  display: flex;
  justify-content: flex-start;
  border: none;
  cursor: pointer;
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
  height: 4.5rem;
  padding: 0 27px;
  transition: background-color 0.3s ease;
  text-align: center;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #e59a9a;
  }
`;

export const ContainerButton = styled.div`
  margin-left: 30px;
`;

export const SidebarContainer = styled.div<{ $isOpen: boolean }>`
  background-color: ${theme.primary};
  position: absolute;
  top: 35px;
  right: 0;
  z-index: -1;
  height: ${(props) => (props.$isOpen ? "310px" : "0px")};
  transition: height 0.3s ease-in-out;
  overflow: hidden;
  border-radius: 0 0px 30px 30px;
  box-shadow: -7px 4px 20px rgba(244, 89, 84, 0.5);
`;

export const Overlay = styled.div`
  background-color: transparent;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
`;
