import React from "react";
import {
  Container,
  ContainerInner,
  ContainerRight,
  ImageContainer,
} from "./styles";
import Title from "../title";
import Image from "next/image";
import Typography from "../typography";

interface FooterProps {
  id: string;
}
const Footer = ({ id }: FooterProps) => {
  return (
    <Container id={id}>
      <Title title="Contacto" />
      <ContainerInner>
        <ImageContainer>
          <Image src="/image-footer.svg" width={300} height={200} alt="" />
        </ImageContainer>
        <ContainerRight>
          <Typography variant="description2">
            ¿Tienes dudas, sugerencias o necesitas ayuda?
          </Typography>
          <Typography variant="description">
            Estamos aquí para escucharte. Contáctanos y con gusto te ayudaremos
            a que tu experiencia en la app sea la mejor posible.
          </Typography>

          <Typography variant="title1">Correo</Typography>
          <Typography>hardtech@correo.com</Typography>
        </ContainerRight>
      </ContainerInner>
    </Container>
  );
};

export default Footer;
