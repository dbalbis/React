
import Grid from '@mui/material/Grid';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetailCard = ({ name, thumbnail, price, id, talle, stock, desc }) => {

  const addProduct = (cant) => {
       
    alert (`Has agregado ${cant} producto/s`)
    
    

   
   
}

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
          
          <p className="precio">${price}</p>
          
          <div className='btnComprarDetail'>
          <p className='mostrarCantidad'>Cantidad:<ItemCount stock={stock} addProduct={addProduct} /></p>
          
          </div>
          
          
          
          
          

      </Grid>

      
      
    </>
  );
};

export default ItemDetailCard;
