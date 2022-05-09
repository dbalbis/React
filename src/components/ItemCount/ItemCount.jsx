import React, { useState, useContext } from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';
import '../../styles/_ItemCount.scss';

import CartContext from '../../Context/CartContext';

const ItemCount = ({ stock, addProduct, action }) => {
  const { addProductToCart, cartProducts } = useContext(CartContext);
  const [count, setCount] = useState(1);

  const onAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      alert('No tenemos tanto Stock');
    }
  };

  const onSub = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
    }
  };

  const addToCart = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <IconButton
        disabled={count === stock ? true : false}
        onClick={onAdd}
        aria-label="sumar"
        variant="contained"
        size="large"
        className="btnSumar"
      >
        <AddOutlinedIcon />
      </IconButton>

      <span>{count}</span>

      <IconButton
        onClick={onSub}
        disabled={count === 1 ? true : false}
        aria-label="restar"
        variant="contained"
        size="large"
        className="btnRestar"
      >
        <RemoveOutlinedIcon />
      </IconButton>
      <div>
        <Button
          onClick={(e) => action(e, count)}
          variant="contained"
          size="small"
          className="btnComprar btnComprarDetail"
        >
          Agregar al Carrito
        </Button>
      </div>
    </>
  );
};

export default ItemCount;
