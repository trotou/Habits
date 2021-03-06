import { Card, CardMedia } from "@material-ui/core";
import styled from "styled-components";
import {
  currentColor3,
  currentColor2,
  currentColor1,
  neutralColor,
} from "../../styles/globalStyles";

export const modalWarpStyle = {
  backgroundColor: currentColor2,
  color: currentColor1,
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  height: "5000px",
};

export const formWrapperStyle = {
  display: "flex",
  justifyContent: "center",
};

export const buttonStyle = {
  backgroundColor: currentColor1,
  color: neutralColor,
  boxShadow: `2px 2px 0 ${currentColor3}`,
  marginTop: "30px",
};

export const appBar = {
  backgroundColor: currentColor1,
  color: neutralColor,
  position: "relative",
  boxShadow: `2px 2px 0 ${currentColor3}`,
};

export const PerfilButtonStyle = {
  backgroundColor: currentColor1,
  color: neutralColor,
  width: "300px",
  height: "65px",
  marginTop: "15px",
  marginBottom: "15px",
  boxShadow: `2px 2px 0 ${currentColor3}`,
};

export const CardUser = {
  root: {
    marginTop: "5%",
    width: "300px",
    height: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: currentColor1,
    boxShadow: `2px 2px 0 ${currentColor3}`,
  },
  topProfile: {
    position: "absolute",
    marginTop: "75px",
    display: "flex",
    flexDirection: "column",
    width: "300px",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: "125px",
    height: "125px",
    border: "3px solid #FFF",
    backgroundColor: neutralColor,
  },

  banner: {
    width: "100%",
    height: "100%",
    borderBottom: `2px solid ${neutralColor}`,
  },
  bannerContainer: {
    backgroundColor: neutralColor,
    width: "300px",
    height: "150px",
  },
  userName: {
    color: neutralColor,
    margin: "5px",
    maxWidth: "285px",
    display: "flex",
    alignItems: "center",
  },
};

export const CardMediaUser = styled(CardMedia)`
  background-image: url(https://image.freepik.com/free-vector/binary-code-pattern-background_1142-902.jpg);
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const DivPerfil = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  background-color: ${currentColor2};

  @media (max-width: 600px) {
    padding-top: 40vh;
    flex-direction: column;
  }
`;

export const DivItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const CardItem = styled(Card)`
  width: 60%;
  height: 15%;
  margin: 2%;
  &:hover {
    background-color: blue;
  }
`;
