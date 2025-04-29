import React from "react";
import {
  Container,
  ContainerBottom,
  ContainerCenter,
  ContainerInner,
  ContainerRight,
  ContainerTop,
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
          <Image src="/image-footer.svg" width={290} height={240} alt="" />
        </ImageContainer>
        <ContainerRight>
          <ContainerTop>
            <Typography variant="description1">
              ¿Tienes dudas, sugerencias o necesitas ayuda?
            </Typography>
            <Typography>
              Estamos aquí para escucharte. Contáctanos y con gusto te
              ayudaremos a que tu experiencia en la app sea la mejor posible.
            </Typography>
          </ContainerTop>

          <ContainerCenter>
            <Typography variant="title1">Correo</Typography>
            <Typography>hardtech@correo.com</Typography>
          </ContainerCenter>

          <ContainerBottom>
            <Image src="/logo-instagram.svg" width={39} height={39} alt="" />
            <Typography>@patitas.app</Typography>
          </ContainerBottom>
        </ContainerRight>
      </ContainerInner>
    </Container>
  );
};

export default Footer;
