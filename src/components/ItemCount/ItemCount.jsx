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
    } else {
      alert('No tenemos tanto Stock');
      console.log({ stock });
    }
  };

  const onSub = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      console.log({ stock });
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
        onClick={onSub}
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
