import React from "react";
import {
  CardContainer,
  Container,
  TextContainer,
  TitleContainer,
} from "./styles";
import Image from "next/image";
import Typography from "../typography";

interface SubscribeCardProps {
  urlIcon: string;
  title: string;
  tier: string;
  price: string;
  description: string;
  color: string;
  urlBackground: string;
}

const SubscribeCard = ({
  urlIcon,
  title,
  tier,
  price,
  description,
  color,
  urlBackground,
}: SubscribeCardProps) => {
  return (
    <Container>
      <Image src={urlIcon} width={185} height={153} alt="" />
      <CardContainer $urlBackground={urlBackground}>
        <TitleContainer $color={color}>
          <Typography variant="title1" color="white">
            {title}
          </Typography>
        </TitleContainer>
        <TextContainer>
          <Typography color="primary" style={{ textAlign: "center", color }}>
            {tier}
          </Typography>
          <Typography variant="title3" style={{ color }}>
            {price}
          </Typography>
          <Typography>
            <b>{description}</b>
            <br />
            Como agradecimiento de tu apoyo, obtendrás una medalla que será
            visible en tu perfil.
          </Typography>
        </TextContainer>
      </CardContainer>
    </Container>
  );
};

export default SubscribeCard;
