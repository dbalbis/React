import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import '../../styles/_Card.scss';
import Container from '@mui/material/Container';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import React,{useEffect, useState, useContext} from "react";
import CartContext from '../../Context/CartContext';

const Card = ({ product }) => {
  const {name, thumbnail, price, id, talle, stock, } = product
  const [productQuantity, setProductQuantity] = useState(0);
  const [mostrarItemCount, setMostrarItemCount] = useState(true);
  const {addProductToCart} = useContext(CartContext);
  
  const onAdd = (e, count) => {
      if(!!e & productQuantity<1){
          setProductQuantity(count);
      }
  }
  useEffect(()=>{
      if(productQuantity>0){
          setMostrarItemCount(false);
          addProductToCart(product, productQuantity);
      }
  },[addProductToCart, product, productQuantity]) 
  /* console.log("Cantidad de Productossss", productQuantity) */  
  return (
    <>
      <CssBaseline />
      <Container  maxWidth="sm" className="itemlistContainer">


        
        <div className="itemList">
        <Link to={`/productos/${id}`}>
          <div className="imgContainer">
          
            <img src= {thumbnail} alt="Remera" />
          </div>
          </Link>
          <div className='itemDetail'>
          <h3>{name}</h3>
          <div className="Talle">Talle: {talle} </div>
          <p className="precio">${price}</p>
          
          <div className='btnFinalizarCompra'>
          {mostrarItemCount ?(
                        <ItemCount stock={stock} initial={1} action={onAdd}/>
                        ):( <div>
                                <Link to='/cart'>
                                <Button  variant="contained" size="small" color="success" className="btnComprarDetail">Finalizar Compra
                                </Button>
                            </Link>
                            </div>
                        )
                    }
          
          </div>
          <div className='detailsContainer'>
          <Link to={`/productos/${id}`}>
          <Button className ="btnDetalles"  size="small">
            VER DETALLES
          </Button>
          </Link>
          </div>
        </div>
        </div>
        
      </Container>
    </>
  );
};

export default Card;
