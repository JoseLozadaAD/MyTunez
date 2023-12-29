import { createTheme } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#b343b0',
      light: '#ffa6ff',
      dark: '#800080',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#161616',
      light: '#2c2c2c',
      dark: '#000000',
      contrastText: '#898989',
    },
    text: {
      primary: '#ffffff',
      secondary: '#e0e0e0',
    },
  },
});

export { darkTheme };
