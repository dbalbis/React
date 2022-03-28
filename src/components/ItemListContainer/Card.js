import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import '../../styles/_Card.scss';
import Container from '@mui/material/Container';
import ItemCount from '../ItemCount/ItemCount';
import foto from '../../images/foto1.jpg';

const Card = (props) => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm" className="itemlistContainer">
        <div className="itemList">
          <div>
            <img src={foto} alt="Remera" />
          </div>
          <h3>{props.titulo}</h3>
          <div className="Talle">Talle: {props.talle} </div>
          <p className="precio">$ {props.precio}</p>
          <div>
            <ItemCount stock={props.stock} />
          </div>
          <Button variant="contained" size="small" className="btnComprar">
            Comprar
          </Button>
        </div>
      </Container>
    </>
  );
};

export default Card;
