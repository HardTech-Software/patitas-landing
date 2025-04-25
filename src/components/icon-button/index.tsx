import React from "react";
import Icon, { IconName } from "../icon";
import { Container } from "./styles";

interface IconButtonProps {
  src: string;
}

const IconButton = ({ src }: IconButtonProps) => {
  return (
    <Container>
      <Icon name={src as IconName} />
    </Container>
  );
};

export default IconButton;
