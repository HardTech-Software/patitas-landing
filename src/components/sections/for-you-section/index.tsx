import React from "react";
import Typography from "@/components/typography";
import { Container } from "./styles";

interface ForYouSectionProps {
  id: string;
}
const ForYouSection = ({ id }: ForYouSectionProps) => {
  return (
    <Container id={id}>
      <Typography>que hay para ti</Typography>
    </Container>
  );
};

export default ForYouSection;
