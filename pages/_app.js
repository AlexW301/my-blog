import "../styles/globals.css";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { orange } from '@mui/material/colors';

const theme = createTheme({
  status: {
    danger: orange[500],
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
