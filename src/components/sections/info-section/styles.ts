import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 clamp(1rem, 12vw, 1rem) 5rem;
  gap: 50px;
`;

export const InfoCardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 37px;
  flex-wrap: wrap;
`;
