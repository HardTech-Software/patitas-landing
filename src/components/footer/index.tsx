import React from "react";
import {
  Container,
  ContainerCenter,
  ContainerCenterInner,
  ContainerInner,
  ContainerLeft,
  ContainerRight,
  ContainerRightInner,
  Email,
  LogoIcon,
} from "./styles";
import Icon from "../icon";
import Typography from "../typography";
import Image from "next/image";
import { Constants } from "@/utils/constants/constants";
import { scrollToSection } from "@/utils/constants/nav-items";

interface FooterProps {
  id: string;
}
const Footer = ({ id }: FooterProps) => {
  return (
    <Container id={id}>
      <LogoIcon onClick={() => scrollToSection("home-section")}>
        <Icon name="logo-footer" />
      </LogoIcon>

      <ContainerInner>
        <ContainerLeft>
          <Typography variant="description2">Contacto</Typography>
          <Email href={`mailto:${Constants.email}`}>
            <Typography>{Constants.email}</Typography>
          </Email>
        </ContainerLeft>
        <ContainerCenter>
          <Image src="/logo-instagram.svg" width={42} height={42} alt="" />
          <ContainerCenterInner>
            <Typography variant="description2">Siguenos</Typography>
            <Typography>{Constants.instagram}</Typography>
          </ContainerCenterInner>
        </ContainerCenter>
        <ContainerRight>
          <Image src="/logo-hardtech.svg" width={43} height={47} alt="" />
          <ContainerRightInner>
            <Typography>developed</Typography>
            <Typography>
              by <span style={{ color: "#D92121" }}>hardtech</span>
            </Typography>
          </ContainerRightInner>
        </ContainerRight>
      </ContainerInner>
    </Container>
  );
};

export default Footer;
