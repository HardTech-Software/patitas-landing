import Typography from "@/components/typography";
import styled from "styled-components";

export const Container = styled.div`
  padding: 5rem clamp(1rem, 12vw, 1rem);
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;
`;

export const CustomTypography = styled(Typography)`
  text-align: center;
  max-width: 670px;
`;

export const ContainerCards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
