import { theme } from "@/helpers/theme";
import styled from "styled-components";

interface TitleProps {
  $variant?: "primary" | "secondary";
}

export const Container = styled.div<TitleProps>`
  border: 3px solid ${theme.primary};
  border-radius: 50px;
  display: inline-block;
  padding: 5px 20px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  background-color: ${({ $variant }) =>
    $variant === "primary" ? theme.background : theme.primary};
`;
