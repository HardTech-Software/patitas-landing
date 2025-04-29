import styled from "styled-components";

export const Container = styled.div`
  width: 180px;
  height: 100%;
`;

export const Nav = styled.nav`
  margin-top: 50px;
`;

export const Item = styled.div`
  padding: 10px 25px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ce4b47;
  }
`;

export const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
