import {
  currentColor1,
  currentColor2,
  currentColor3,
} from "../../styles/globalStyles";

export const appBarStyle = {
  position: "relative",
  backgroundColor: currentColor1,
};

export const titleStyle = {
  color: currentColor3,
};

export const modalStyle = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: currentColor2,
};

export const buttonStyle = {
  width: "150px",
  margin: "10px",
  backgroundColor: currentColor1,
  color: currentColor3,
  boxShadow: `2px 2px 4px 1px ${currentColor3}`,
};
