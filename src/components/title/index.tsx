import React from "react";
import { Container } from "./styles";
import Typography from "../typography";

interface TitleProps {
  title: string;
  variant?: "primary" | "secondary";
}

const Title = ({ title, variant = "primary" }: TitleProps) => {
  return (
    <Container $variant={variant}>
      <Typography
        variant="h2"
        color={variant === "primary" ? "primary" : "white"}
      >
        {title}
      </Typography>
    </Container>
  );
};

export default Title;
