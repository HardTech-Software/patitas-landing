import React from "react";
import { Container } from "./styles";
import Typography from "@/components/typography";

interface MissionSectionProps {
  id: string;
}

const MissionSection = ({ id }: MissionSectionProps) => {
  return (
    <Container id={id}>
      <Typography>nuestra motivacion</Typography>
    </Container>
  );
};

export default MissionSection;
