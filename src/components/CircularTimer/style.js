import {
  currentColor1,
  currentColor3,
  currentColor2,
} from "../../styles/globalStyles";

export const counterWrapperStyle = {
  width: "300px",
  height: "450px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export const circleStyle = {
  width: "200px",
  height: "200px",
  margin: "15px",
  color: currentColor1,
  borderRadius: "50%",
  backgroundColor: currentColor2,
  boxShadow: `0 4px 8px 2px ${currentColor3}`,
};
