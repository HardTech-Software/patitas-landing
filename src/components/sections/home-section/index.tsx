import React from "react";
import { Container } from "./styles";
import Typography from "@/components/typography";

interface HomeSectionProps {
  id: string;
}
const HomeSection = ({ id }: HomeSectionProps) => {
  return (
    <Container id={id}>
      <Typography>home</Typography>
    </Container>
  );
};

export default HomeSection;
