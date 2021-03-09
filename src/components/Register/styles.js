import styled from "styled-components";
import { Card } from "@material-ui/core";

export const CardRegister = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 15%;

  @media (min-width: 420px) {
    width: 400px;
  }
`;

export const TagP = styled.p`
  font-size: small;
  margin-top: 5%;
  color: red;
`;
