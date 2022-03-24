import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '../ItemListContainer/Card';

function ListProducts() {
  return (
    <Container maxWidth="xl">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item lg={4}>
          <Card
            titulo={'Remeron Essential Trip'}
            talle={'XL'}
            precio={500}
            stock={2}
          />
        </Grid>
        <Grid item lg={4}>
          <Card
            titulo={'Buzo Essential Trip'}
            talle={'L'}
            precio={1200}
            stock={5}
          />
        </Grid>
        <Grid item lg={4}>
          <Card
            titulo={'Buzo Essential Lime'}
            talle={'M'}
            precio={1800}
            stock={3}
          />
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item lg={4}>
          <Card
            titulo={'Remeron Monkey Lime'}
            talle={'L'}
            precio={1000}
            stock={4}
          />
        </Grid>
        <Grid item lg={4}>
          <Card
            titulo={'Remeron Urban Cultur'}
            talle={'XL'}
            precio={1500}
            stock={1}
          />
        </Grid>
        <Grid item lg={4}>
          <Card
            titulo={'Remeron Parental'}
            talle={'S'}
            precio={950}
            stock={6}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default ListProducts;
