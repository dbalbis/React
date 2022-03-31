import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import '../../styles/_ItemDetail.scss';

import ItemDetailCard from '../ItemDetailList/ItemDetailList';

const ItemDetailContainer = (props) => {
  return (
    <>
      
      
      
      <Container className = "itemDetailConteiner" maxWidth="xl">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        >
        <ItemDetailCard/>
       
        
      </Grid>
    </Container>
        
       
        
      
      

      

      
      
  


        
      
    
    
    
      
          </>

          
  );
};

export default ItemDetailContainer;