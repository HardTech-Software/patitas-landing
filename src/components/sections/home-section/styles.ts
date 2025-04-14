import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 100px;
  padding: 60px 0;
  @media (max-width: 1120px) {
    flex-direction: column;
  }
`;

export const ContainerLeft = styled.div`
  max-width: 600px;
  width: 100%;
`;

export const CustomImage = styled(Image)`
  max-height: 370;

  @media (max-width: 550px) {
    width: 100%;
    height: 100%;
  }
`;
export const ContainerTop = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const ContainerBottom = styled.div``;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 15px;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

export const ContainerRight = styled.div``;
