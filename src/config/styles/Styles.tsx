import { useTheme } from '@mui/material';
import GlobalStyles from '@mui/material/GlobalStyles';

export function StylesGlobal() {
  const theme = useTheme();

  return (
    <GlobalStyles
      styles={{
        body: {
          height: '100vh',
          width: '100vw',
          backgroundColor: theme.palette.background.default,
          margin: 0,
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          color: theme.palette.text.primary,
        },
        a: {
          textDecoration: 'none',
          color: theme.palette.text.primary,
        },
      }}
    />
  );
}
