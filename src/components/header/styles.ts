import styled from "styled-components";

export const Container = styled.div`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 30px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const Item = styled.div`
  cursor: pointer;
  padding: 25px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f45954;
  }
`;
