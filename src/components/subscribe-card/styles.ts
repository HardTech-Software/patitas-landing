import styled from "styled-components";

interface TitleContainerProps {
  $color: string;
}

interface CardContainerProps {
  $urlBackground: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const CardContainer = styled.div<CardContainerProps>`
  height: 280px;
  width: 320px;
  position: relative;
  background-image: ${({ $urlBackground }) => `url(${$urlBackground})`};
  background-size: cover;
  background-position: center;
`;

export const TitleContainer = styled.div<TitleContainerProps>`
  background-color: ${({ $color }) => $color};
  width: 155px;
  height: 40px;
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.25);
`;

export const TextContainer = styled.div`
  margin: 55px 45px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
