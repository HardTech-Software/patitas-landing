import React from "react";
import { Container, TextContainer } from "./styles";
import Typography from "@/components/typography";
import Title from "@/components/title";

interface MissionSectionProps {
  id: string;
}

const MissionSection = ({ id }: MissionSectionProps) => {
  return (
    <Container id={id}>
      <Title title="Nuestra Motivación" />
      <TextContainer>
        <Typography>
          <b>Amamos a los animales y queremos lo mejor para ellos. </b> Por eso,
          creamos esta app no solo para compartir sus momentos especiales, sino
          también para ayudarlos a encontrar un hogar y reunirse con sus
          familias cuando se pierden.
        </Typography>
        <Typography color="primary">-Hardtech</Typography>
      </TextContainer>
    </Container>
  );
};

export default MissionSection;
