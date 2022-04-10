import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ItemCount from '../ItemCount/ItemCount';
import React,{useEffect, useState} from "react";


const ItemDetailCard = ({ name, thumbnail, price, id, talle, stock, desc }) => {
  const [productQuantity, setProductQuantity] = useState(0);
const [mostrarItemCount, setMostrarItemCount] = useState(true);

const onAdd = (e, count) => {
  if(!!e & productQuantity<1){
      setProductQuantity(count);
  }
}
useEffect(()=>{
  if(productQuantity>0){
      setMostrarItemCount(false);
      
  }
},[productQuantity])

console.log("Cantidad de Productos", productQuantity)

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
          {mostrarItemCount ?(
                        <ItemCount stock={stock} initial={1} action={onAdd}/>
                        ):( <div>
                                <Link to='/cart'>
                                <Button  variant="contained" size="small" color="success" className="btnComprarDetail2">Finalizar Compra
                                </Button>
                            </Link>
                            </div>
                        )
                    }
          
          </div>
          
          
          
          
          

      </Grid>

      
      
    </>
  );
};

export default ItemDetailCard;
