import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

export const bookCardTheme = createTheme({
  typography: {
    subtitle1: {
      
      left: "5.63%",
      right: "15.14%",
      top: "66.52%",
      bottom: "28.54%",

      /* Subtitle 1 */

      fontFamily: "Cera Pro",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "18px",
      lineHeight: "23px",
      /* identical to box height */

      /* Text/high_emphasis */

      color: "#03314B",
    },
    body2: {
     
      left: "5.63%",
      right: "60.92%",
      top: "74.89%%",
      bottom: "20.82%",
      fontFamily: "Cera Pro",
      fontSize: 16,
      lineHeight: "20px",
      fontStyle: "normal",
      fontWeight: "normal",
      color: "#6D787E",
    },
    caption: {
      fontFamily: "Cera Pro",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 14,
      lineHeight: "18px",
      verticalAlign: "top",
      color: "#6D787E",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderRadius: "8px",
        },
      },
    },
  },
});
export const cardStyle = makeStyles((theme) => {
  return {
    bookcard: {
      height: "466px",
      width: "284px",
      position: "absolute",
      left: "0%",
      right: "0%",
      top: "0%",
      bottom: "0%",

      /* White */

      background: "#FFFFFF",
      /* Grey/300 */

      borderRadius: "8px",
      boxSizing: "border-box",
      margin: "5% auto",
    },
    cardmedia: {
      height: "292px",
      width: "294.1px",
    },
    view: {
      display: "flex",
      paddingTop:"17px"
    },
    icon: {
      "&.MuiSvgIcon-root": {
        left: "8.33%",
        right: "8.33%",
        top: "8.33%",
        bottom: "8.33%",
        width: "16.67px",
        height: "16.67px",
        marginRight: "5.67px",
      },
    },
    text: {
      left: "14.08%",
      right: "52.11%",
      top: "82.83%",
      bottom: "13.3%",
    },
    moreicon:{
       marginLeft:"90%"
    },
  };
});
