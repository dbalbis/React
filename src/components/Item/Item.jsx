import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import '../../styles/_Card.scss';
import Container from '@mui/material/Container';
import ItemCount from '../ItemCount/ItemCount';

const Card = ({ name, thumbnail, price, id, talle, stock }) => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm" className="itemlistContainer">


        
        <div className="itemList">
          <div>
            <img src= {thumbnail} alt="Remera" />
          </div>
          <h3>{name}</h3>
          <div className="Talle">Talle: {talle} </div>
          <p className="precio">$ {price}</p>
          <div>
            <ItemCount stock={stock} />
          </div>
          <Button variant="contained" size="small" className="btnComprar">
            Comprar
          </Button>
        </div>
        <div>
          <Button href="#text-buttons" size="small">
            VER DETALLES
          </Button>
        </div>
      </Container>
    </>
  );
};

export default Card;
