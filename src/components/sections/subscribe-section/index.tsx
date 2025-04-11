import React from "react";
import { Container } from "./styles";
import Typography from "@/components/typography";
interface SubscribeSectionProps {
  id: string;
}

const SubscribeSection = ({ id }: SubscribeSectionProps) => {
  return (
    <Container id={id}>
      <Typography>suscribete y ayuda</Typography>
    </Container>
  );
};

export default SubscribeSection;
