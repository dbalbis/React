import React, { useState } from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import IconButton from '@mui/material/IconButton';
import '../../styles/_ItemCount.scss';

const ItemCount = ({ stock }) => {
  const [count, setCount] = useState(1);

  const onAdd = () => {
    if (count < stock) {
      setCount(count + 1);
      alert('Funciona');
    } else {
      alert('No funciona');
      console.log(JSON.stringify(stock));
    }
  };

  return (
    <>
      <IconButton
        onClick={onAdd}
        aria-label="sumar"
        variant="contained"
        size="small"
        className="btnSumar"
      >
        <AddOutlinedIcon />
      </IconButton>

      <p>{count}</p>

      <IconButton
        aria-label="restar"
        variant="contained"
        size="small"
        className="btnRestar"
      >
        <RemoveOutlinedIcon />
      </IconButton>
    </>
  );
};

export default ItemCount;
