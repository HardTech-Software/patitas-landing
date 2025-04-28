import { theme } from "@/helpers/theme";
import styled from "styled-components";

export const Container = styled.div`
  width: 180px;
  padding: 0px 10px;
  box-shadow: 0 0 20px rgba(244, 89, 84, 0.5);
  height: 100%;
`;

export const Nav = styled.nav`
  margin-top: 60px;
`;

export const Item = styled.div`
  padding: 0 15px;
  margin-top: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

export const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 25px;
`;
