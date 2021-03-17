import { makeStyles } from "@material-ui/core/styles";
import {
  currentColor1,
  currentColor2,
  currentColor3,
} from "../../styles/globalStyles";

export const useGridStyles = makeStyles(({ breakpoints }) => ({
  root: {
    justifyContent: "center",
    [breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      margin: 0,
      padding: 0,
      width: "95%",
    },
  },
}));

export const useStyles = makeStyles(({ palette, breakpoints }) => ({
  color: ({ color }: { color: string }) => ({
    "&:before": {
      backgroundColor: currentColor1,
    },
  }),
  root: {
    position: "relative",
    borderRadius: "1rem",
    "&:before": {
      transition: "0.2s",
      position: "absolute",
      width: "100%",
      height: "100%",
      content: '""',
      display: "block",
      borderRadius: "1rem",
      zIndex: 0,
      bottom: 0,
    },
    "&:hover": {
      "&:before": {
        bottom: -6,
      },
      "& $logo": {
        transform: "scale(1.1)",
        boxShadow: `4px 4px 10px 0 ${currentColor3}`,
      },
    },
  },
  cover: {
    borderRadius: "1rem",
    width: "99.9%",
  },
  content: ({ color }: { color: string }) => ({
    position: "relative",
    zIndex: 1,
    borderRadius: "1rem",
    boxShadow: `4px 4px 8px 0 ${currentColor3}`,
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      left: 0,
      top: 0,
      zIndex: 0,
      width: "100%",
      height: "100%",
      clipPath:
        "polygon(0% 100%, 0% 35%, 0.3% 33%, 1% 31%, 1.5% 30%, 2% 29%, 2.5% 28.4%, 3% 27.9%, 3.3% 27.6%, 5% 27%,95% 0%,100% 0%, 100% 100%)",
      borderRadius: "1rem",
      background: `linear-gradient(to top, ${currentColor1}, ${currentColor2})`,
    },
    [breakpoints.down("sm")]: {
      width: "300px",
      margin: 0,
    },
  }),
  title: {
    fontFamily: "Fjalla One",
    fontSize: "1.25rem",
    color: "#fff",
    margin: 0,
    [breakpoints.down("sm")]: {
      marginTop: "15%",
      marginLeft: "200%",
      fontSize: "0.84rem",
      color: "black",
    },
  },
  logo: {
    transition: "0.3s",
    width: 100,
    height: 100,
    boxShadow: `1px 1px 4px 0 ${currentColor3}`,
    borderRadius: "1rem",
    [breakpoints.down("sm")]: {
      width: 50,
      height: 50,
    },
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    [breakpoints.down("sm")]: {
      width: "50px",
      fontSize: "0.8rem",
      margin: 0,
    },
  },

  expandOpen: {
    transform: "rotate(180deg)",
  },

  form: {
    width: "400px",
    [breakpoints.down("sm")]: {
      width: "300px",
      margin: 0,
    },
  },
}));

export const cardsWrapperStyle = {
  height: "100vh",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
