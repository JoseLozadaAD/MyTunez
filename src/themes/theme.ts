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

/* const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#d6c6e1',
      light: '#ffffff',
      dark: '#8b5fbf',
      contrastText: '#2c2c2c',
    },
    secondary: {
      main: '#e9e4ed',
      light: '#ffffff',
      dark: '#8b5fbf',
      contrastText: '#2c2c2c',
    },
    text: {
      primary: '#2c2c2c',
      secondary: '#2c2c2c',
    },
  },
}); */

const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#e0e0e0',
      light: '#fafafa',
      dark: '#bdbdbd',
      contrastText: '#000',
    },
    secondary: {
      main: '#fff',
      light: '#cfcfcf',
      dark: '#707070',
      contrastText: '#000',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
  },
});

export { darkTheme, lightTheme };
