import React from "react";
import { Container, ContainerCards, CustomTypography } from "./styles";
import Title from "@/components/title";
import SubscribeCard from "@/components/subscribe-card";
import { SubscribeCards } from "@/utils/constants/subscribe-card";
interface SubscribeSectionProps {
  id: string;
}

const SubscribeSection = ({ id }: SubscribeSectionProps) => {
  return (
    <Container id={id}>
      <Title title="Suscríbete y ayuda" variant="secondary" />
      <CustomTypography>
        Con tu ayuda, podremos mejorar la app y así entregarte un mejor
        servicio. Estas medallas se mostrarán en tu perfil de usuario.{" "}
        <b>¡Cada granito de arroz cuenta! :)</b>
      </CustomTypography>
      <ContainerCards>
        {SubscribeCards.map((item, index) => (
          <SubscribeCard
            key={index}
            urlIcon={item.urlIcon}
            title={item.title}
            tier={item.tier}
            price={item.price}
            description={item.description}
            color={item.color}
            urlBackground={item.urlBackground}
          />
        ))}
      </ContainerCards>
    </Container>
  );
};

export default SubscribeSection;
