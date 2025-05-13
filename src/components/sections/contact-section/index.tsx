import React from "react";
import {
  Container,
  ContainerBottom,
  ContainerCenter,
  ContainerInner,
  ContainerRight,
  ContainerRightInner,
  ContainerTop,
  Email,
  ImageContainer,
} from "./styles";

import Image from "next/image";
import { Title, Typography } from "@/components";
import { Constants } from "@/utils/constants/constants";

interface ContactSectionProps {
  id: string;
}

const ContactSection = ({ id }: ContactSectionProps) => {
  return (
    <Container id={id}>
      <Title title="Contacto" />
      <ContainerInner>
        <ImageContainer>
          <Image src="/image-footer.svg" width={290} height={240} alt="" />
        </ImageContainer>
        <ContainerRight>
          <ContainerTop>
            <Typography>
              <b> ¿Tienes dudas, sugerencias o necesitas ayuda? </b>
              Estamos aquí para escucharte. Contáctanos y con gusto te
              ayudaremos a que tu experiencia en la app sea la mejor posible.
            </Typography>
          </ContainerTop>
          <ContainerRightInner>
            <ContainerCenter>
              <Typography variant="title1">Correo</Typography>
              <Email href={`mailto:${Constants.email}`}>
                <Typography>{Constants.email}</Typography>
              </Email>
            </ContainerCenter>

            <ContainerBottom>
              <Image src="/logo-instagram.svg" width={39} height={39} alt="" />
              <Typography>{Constants.instagram}</Typography>
            </ContainerBottom>
          </ContainerRightInner>
        </ContainerRight>
      </ContainerInner>
    </Container>
  );
};

export default ContactSection;
