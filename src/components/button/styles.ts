import { theme } from "@/helpers/theme";
import styled from "styled-components";
import Typography from "../typography";
interface ButtonProps {
  $variant?: "primary" | "secondary";
}

export const Container = styled.button<ButtonProps>`
  border: none;
  border-radius: 30px;
  padding: 8px 20px;
  background-color: ${({ $variant }) =>
    $variant === "primary" ? theme.primary : theme.white};
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ $variant }) =>
      $variant === "primary" ? "#ce4b47" : "#ce4b47"};
  }
`;
