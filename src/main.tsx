import ReactDOM from "react-dom/client";

import { createTheme, ThemeProvider } from "@mui/material";

import App from "./App";
import "./index.css";

const theme = createTheme({
  palette: {
    primary: { main: "#000" },
    secondary: { main: "#fff" },
  },
  typography: {
    allVariants: {
      fontFamily: "Profil",
    },
    button: { textTransform: "none" },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
