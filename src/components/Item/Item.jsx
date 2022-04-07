import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import '../../styles/_Card.scss';
import Container from '@mui/material/Container';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const Card = ({ name, thumbnail, price, id, talle, stock }) => {
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
          <div>
            <ItemCount stock={stock} />
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
