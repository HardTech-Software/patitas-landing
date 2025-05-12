import styled from "styled-components";

export const ContentContainer = styled.div`
  box-shadow: 0 20px 40px rgba(204, 61, 61, 0.3);
  position: relative;

  background-image: linear-gradient(
      to right,
      transparent 0%,
      rgba(254, 246, 246, 1) 35%,
      rgba(254, 246, 246, 1) 65%,
      transparent 100%
    ),
    url("/background-1.svg");
  background-repeat: repeat-y;
  background-size: 1920px auto;
  background-position: top center;

  @media (max-width: 748px) {
    background-image: url("/background-2.svg");
    background-size: 748px auto;
  }
`;
