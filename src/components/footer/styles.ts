import styled from "styled-components";

export const Container = styled.div`
  padding: 60px clamp(2rem, 12vw, 10rem);
`;

export const ContainerInner = styled.div`
  display: flex;
  margin-top: 40px;
  align-items: center;
  gap: 20px;
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div``;
export const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ContainerTop = styled.div``;
export const ContainerCenter = styled.div``;
export const ContainerBottom = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
