import React from "react";
import { Container, InfoCardContainer } from "./styles";
import { InfoCards } from "@/utils/constants/info-card";
import { InfoCard, Title } from "@/components";

interface InfoSectionProps {
  id: string;
}
const InfoSection = ({ id }: InfoSectionProps) => {
  return (
    <Container id={id}>
      <Title title="Que hay para ti" />
      <InfoCardContainer>
        {InfoCards.map((item, index) => (
          <InfoCard
            key={index}
            url={item.url}
            title={item.title}
            description={item.description}
          />
        ))}
      </InfoCardContainer>
    </Container>
  );
};

export default InfoSection;
