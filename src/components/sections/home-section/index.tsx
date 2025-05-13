import React from "react";
import {
  ButtonContainer,
  Container,
  ContainerBottom,
  ContainerLeft,
  ContainerRight,
  ContainerTop,
} from "./styles";
import Typography from "@/components/typography";
import IconButton from "@/components/icon-button";
import Icon from "@/components/icon";

interface HomeSectionProps {
  id: string;
}
const HomeSection = ({ id }: HomeSectionProps) => {
  return (
    <Container id={id}>
      <ContainerLeft>
        <ContainerTop>
          <Typography variant="h1">
            Un espacio {""}
            <span style={{ color: "#F45954" }}>para ti y tu mascota</span>
          </Typography>
          <Typography>
            Con Patitas tu y tu mascota
            <b> tendrán la libertad de ser ustedes mismos. </b> Comparte
            momentos, conecta con la comunidad, ayuda a encontrar mascotas
            perdidas y más!
          </Typography>
        </ContainerTop>
        <ContainerBottom>
          <Typography variant="title2">Descargala en</Typography>
          <ButtonContainer>
            <IconButton src="app-store" />
            <IconButton src="google-play" />
          </ButtonContainer>
        </ContainerBottom>
      </ContainerLeft>
      <ContainerRight>
        <Icon name="home-image" width="100%" height="100%" />
      </ContainerRight>
    </Container>
  );
};

export default HomeSection;
