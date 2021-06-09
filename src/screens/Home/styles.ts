import styled from "styled-components";
import { Container } from "react-bootstrap";

export const ContainerFluid = styled(Container)`
  padding: 0;
`;

export const ContainerView = styled(Container)`
  background-color: #e5fdff;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  box-shadow: 5px 5px 35px 3px rgba(0, 0, 0, 0.21); ;
`;

export const Teste = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  width: 980px;
  background-color: pink;
  margin-top: 30px;
`;
