import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const ItemDetailCard = ({ name, thumbnail, price, id, talle, stock, desc }) => {
  return (
    <>
    
      
      <Grid item lg={8}>
      <div className ="imageDetailContainer">
      <img src= {thumbnail} alt="Remera" />
      </div>
      </Grid>
      
      
      <Grid item lg={4}>

      
          <h3>{name}</h3>
          <p className = "detailDesc">{desc}</p>
          <div className="Talle">Talle: {talle} </div>
          <p className="precio">$ {price}</p>
          
          
          <Button variant="contained" size="small" className="btnComprarDetail">
            Comprar
          </Button>
          
          

      </Grid>

      
      
    </>
  );
};

export default ItemDetailCard;
