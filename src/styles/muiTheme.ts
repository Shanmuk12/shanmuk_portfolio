import { createTheme, Theme } from "@mui/material/styles";

// Create a theme instance.
const muiTheme: Theme = createTheme({
  typography: {
    fontFamily: [
      "Poppins",
      "Syne",
      "sans-serif",
      "Roboto",
      "'Helvetica Neue'",
      "Arial"
    ].join(","),
  }
});

export default muiTheme;