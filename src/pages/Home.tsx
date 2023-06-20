import React from 'react';
import {
  Grid, Container, Typography, Button,
} from '@mui/material';

const Home: React.FC = () => (
  <Grid container height="100vh" width="100vw">
    <Grid item xs={6} display="flex" alignItems="center">
      <Container>
        <Typography variant="h3">
          Olá, você está acessando o sistema de vendedora da loja Mavi Modas , já possui cadastro?
        </Typography>
        <Button>Já possuo cadastro</Button>
      </Container>
    </Grid>
    <Grid item xs={6} display="flex" alignItems="center" justifyContent="center">
      <Container>
        <img src="../assets/images/favicon.ico" alt="" />
        <Typography variant="h2">Mavi Modas</Typography>
        <Button>Não possuo cadastro</Button>
      </Container>
    </Grid>
  </Grid>
);

export default Home;
