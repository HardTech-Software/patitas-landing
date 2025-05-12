import styled from "styled-components";

export const Container = styled.div`
  padding: 5rem clamp(8rem, 12vw, 1rem);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 114px;

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
    background-image: linear-gradient(
        transparent 0%,
        rgba(254, 246, 246, 1) 100%
      ),
      url("/background-2.svg");
    background-size: 748px auto;
  }

  @media (max-width: 580px) {
    flex-direction: column;
    background-image: none;
  }
`;

export const LogoIcon = styled.div`
  flex: 1;
  cursor: pointer;

  @media (max-width: 920px) {
    flex: none;
  }
`;

export const ContainerInner = styled.div`
  flex: 4;
  display: flex;
  gap: 50px;
  justify-content: space-between;

  @media (max-width: 920px) {
    flex-direction: column;
    flex: none;
  }
`;

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 580px) {
    align-items: center;
  }
`;

export const ContainerCenter = styled.div`
  display: flex;
  flex-direction: columns;
  gap: 17px;
  cursor: pointer;
`;

export const ContainerCenterInner = styled.div``;
export const ContainerRight = styled.div`
  display: flex;
  flex-direction: columns;
  gap: 17px;
  cursor: pointer;
`;

export const ContainerRightInner = styled.div``;

export const Email = styled.a`
  text-decoration: none;
`;
