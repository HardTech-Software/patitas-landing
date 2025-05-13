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
      <span className="button-text">
        <Typography variant="title2" color="inherit">
          {title}
        </Typography>
      </span>
    </Container>
  );
};

export default Button;
