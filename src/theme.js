// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      // můžeš nahradit konkrétními barvami z .clr palety
      main: "#2E7D5A",
      light: "#A9D9BF",
      dark: "#20513E",
    },
    secondary: {
      main: "#FF7043", // teplý akcent podobný ukázkovému webu
      light: "#FFA270",
      dark: "#C63F17",
    },
    background: {
      default: "#FFF8F0",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1F2933",
      secondary: "#4B5563",
    },
  },
  typography: {
    fontFamily: ['"Nunito"', "system-ui", "sans-serif"].join(","),
    h1: {
      fontWeight: 900,
      letterSpacing: "0.08em",
    },
    h2: {
      fontWeight: 800,
      letterSpacing: "0.06em",
    },
    h3: {
      fontWeight: 800,
    },
    button: {
      textTransform: "none",
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 5,
  },
});

export default theme;
