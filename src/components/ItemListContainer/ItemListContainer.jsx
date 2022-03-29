import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import '../../styles/_ItemListContainer.scss';



import CardList from '../ItemList/ItemList';
const ItemListContainer = (props) => {
  return (
    <>
      <Container fixed className="ultimosProductos">
        <h2>{props.message}</h2>
      </Container>
      
      
      
      
      <Container maxWidth="xl">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        >
        <Grid item lg={4}>
        <CardList
          />
        </Grid>
        <Grid item lg={4}>
        <CardList
          />
        </Grid>
        <Grid item lg={4}>
        <CardList
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
        <CardList
          />
          
        </Grid>
        <Grid item lg={4}>
        <CardList
          />
        </Grid>
        <Grid item lg={4}>
          <CardList
          />
        </Grid>
      </Grid>
    </Container>
  );


        
      
    
    
    
      
          </>

          
  );
};

export default ItemListContainer;
