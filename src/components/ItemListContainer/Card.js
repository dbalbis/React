import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import '../../styles/_Card.scss';
import Container from '@mui/material/Container';
import ItemCount from '../ItemCount/ItemCount';

const Card = (props) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" className="itemlistContainer">
        <div className="itemList">
          <h3>{props.titulo}</h3>
          <div>Talle: {props.talle} </div>
          <p className="precio">$ {props.precio}</p>
          <div>
            <ItemCount />
          </div>
          <Button variant="contained" size="small" className="btnComprar">
            Comprar
          </Button>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Card;
