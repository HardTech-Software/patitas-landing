import { theme } from "@/helpers/theme";
import styled from "styled-components";

export const Container = styled.div`
  width: 250px;
  background-color: ${theme.background};
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 2;
  padding: 30px 0;
`;

export const LogoIcon = styled.div`
  display: flex;
  justify-content: center;
`;

export const Nav = styled.nav``;

export const Item = styled.div`
  margin-top: 30px;
  padding: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.primary};
  }
`;

export const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
