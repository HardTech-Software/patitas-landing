import React from "react";
import { Container } from "./styles";
import Typography from "../typography";

interface ButtonProps {
  title: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

const Button = ({ title, variant = "primary", onClick }: ButtonProps) => {
  return (
    <Container $variant={variant} onClick={onClick}>
      <Typography
        variant="title2"
        color={variant === "primary" ? "white" : "primary"}
      >
        {title}
      </Typography>
    </Container>
  );
};

export default Button;
