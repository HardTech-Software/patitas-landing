import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  padding: 5rem clamp(1rem, 12vw, 1rem) 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 748px) {
    background-image: linear-gradient(
      transparent 0%,
      #fef6f6 20%,
      #fef6f6 80%,
      transparent 100%
    );
  }
`;

export const TextContainer = styled.div`
  max-width: 540px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 100px 20px 80px 20px;
  position: relative;
  z-index: 1;

  @media (max-width: 376px) {
    gap: 20px;
  }
`;

export const OpeningQuotes = styled(Image)`
  position: absolute;
  top: 50px;
  left: 0px;
`;

export const ClosingQuotes = styled(Image)`
  position: absolute;
  right: 0px;
  bottom: 80px;
`;
