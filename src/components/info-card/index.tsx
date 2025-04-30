import React from "react";
import { Container, ImageContainer } from "./styles";
import Image from "next/image";
import Typography from "../typography";

interface InfoCargProps {
  url: string;
  title: string;
  description: string;
}

const InfoCard = ({ url, title, description }: InfoCargProps) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={url} width={203} height={174} alt="" />
      </ImageContainer>

      <Typography variant="title1">{title}</Typography>
      <Typography>{description}</Typography>
    </Container>
  );
};

export default InfoCard;
