import React from "react";
import {
  ButtonContainer,
  Container,
  ContainerBottom,
  ContainerLeft,
  ContainerRight,
  ContainerTop,
  CustomImage,
} from "./styles";
import Typography from "@/components/typography";
import IconButton from "@/components/icon-button";

interface HomeSectionProps {
  id: string;
}
const HomeSection = ({ id }: HomeSectionProps) => {
  return (
    <Container id={id}>
      <ContainerLeft>
        <ContainerTop>
          <Typography variant="h1">
            Un espacio{" "}
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
        <CustomImage src="/image-home.svg" width={390} height={370} alt="" />
      </ContainerRight>
    </Container>
  );
};

export default HomeSection;
