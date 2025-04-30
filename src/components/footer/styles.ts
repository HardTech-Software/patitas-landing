import styled from "styled-components";

export const Container = styled.div`
  padding: 5rem clamp(2rem, 12vw, 1rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  background-image: linear-gradient(
      to right,
      transparent 0%,
      rgba(255, 255, 255, 1) 35%,
      rgba(255, 255, 255, 1) 65%,
      transparent 100%
    ),
    url("/background1.svg");
  background-repeat: repeat-y;
  background-size: 1920px auto;
  background-position: top center;

  @media (max-width: 748px) {
    background-image: url("/background2.svg");
    background-size: 748px auto;
  }
`;

export const ContainerInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div``;
export const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 340px;
`;

export const ContainerTop = styled.div``;
export const ContainerCenter = styled.div``;
export const ContainerBottom = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
