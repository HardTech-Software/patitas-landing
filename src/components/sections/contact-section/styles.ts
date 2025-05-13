import styled from "styled-components";

export const Container = styled.div`
  padding: 0 clamp(3rem, 12vw, 1rem) 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
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

export const ContainerRightInner = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 435px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const ContainerTop = styled.div``;
export const ContainerCenter = styled.div``;
export const ContainerBottom = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export const Email = styled.a`
  text-decoration: none;
`;
