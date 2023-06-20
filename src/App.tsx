import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppRoutes from './routes/AppRoutes';
import { StylesGlobal } from './config/styles/Styles';

function App() {
  return (
    <>
      <CssBaseline />
      <AppRoutes />;
    </>
  );
}

export default App;
