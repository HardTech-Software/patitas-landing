import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  background-image: linear-gradient(#fef7f7 80%, transparent 100%);

  padding: 10.5rem clamp(1rem, 12vw, 1rem);

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 25px;
  }
`;

export const ContainerLeft = styled.div`
  max-width: 360px;
  width: 100%;
  @media (max-width: 800px) {
    order: 2;
  }
`;

export const ContainerTop = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const ContainerBottom = styled.div``;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 15px;
`;

export const ContainerRight = styled.div`
  max-width: 370px;
  width: 100%;

  @media (max-width: 800px) {
    order: 1;
  }
`;
