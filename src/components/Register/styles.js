import styled from "styled-components";
import {
  currentColor3,
  currentColor1,
  neutralColor,
} from "../../styles/globalStyles";

export const CardRegister = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "300px",
  height: "460px",
  backgroundColor: currentColor1,
  boxShadow: `2px 2px 8px ${currentColor3}`,
};

export const TagP = styled.p`
  font-size: small;
  margin-top: 5%;
  color: red;
`;

export const titleStyle = {
  margin: "15px",
  color: currentColor3,
};

export const buttonStyle = {
  backgroundColor: currentColor3,
  marginTop: "15px",
};

export const textAreaStyle = {
  backgroundColor: neutralColor,
};
