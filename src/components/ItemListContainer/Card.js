import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import '../../styles/_Card.scss';
import Container from '@mui/material/Container';

const Card = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" className="itemlistContainer">
        <div className="itemList">
          <h3>{props.titulo}</h3>
          <p>Talle: {props.talle} </p>
          <p>$ {props.precio}</p>
          <Button variant="contained" size="small" className="btnComprar">
            Comprar
          </Button>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Card;
