import React from 'react';
import ReactDOM from 'react-dom';
import Grid from '@mui/material/Grid';
import './styles/_Body.scss';
import NavBar from './components/NavBar/NavBar';
import App from './App';
import Card from './components/ItemListContainer/Card';
import Container from '@mui/material/Container';

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <App />
    <Container maxWidth="xl">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={4}>
          <Card titulo={'Remeron Essential Trip'} talle={'XL'} precio={500} />
        </Grid>
        <Grid item xs={4}>
          <Card titulo={'Buzo Essential Trip'} talle={'L'} precio={1200} />
        </Grid>
        <Grid item xs={4}>
          <Card titulo={'Buzo Essential Lime'} talle={'M'} precio={1800} />
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={4}>
          <Card titulo={'Remeron Monkey Lime'} talle={'L'} precio={1000} />
        </Grid>
        <Grid item xs={4}>
          <Card titulo={'Remeron Urban Cultur'} talle={'XL'} precio={1500} />
        </Grid>
        <Grid item xs={4}>
          <Card titulo={'Remeron Parental'} talle={'S'} precio={950} />
        </Grid>
      </Grid>
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
