import { createTheme } from '@mui/material';

// Define as cores para o tema claro
const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#DD2F90',
      contrastText: '#fff',
    },
    secondary: {
      main: '#f986c5',
      contrastText: '#fff',
    },
    background: {
      default: '#f5f6f3',
      paper: '#fff',
    },
  },
});

export { lightTheme };
