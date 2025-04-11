import { theme } from "@/helpers/theme";
import styled from "styled-components";

export const Container = styled.button`
  border: none;
  border-radius: 30px;
  padding: 10px 20px;
  background-color: ${theme.primary};
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ce4b47;
  }
`;
