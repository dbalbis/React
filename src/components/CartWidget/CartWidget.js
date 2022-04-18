import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React from 'react';
import { useContext, useState } from 'react';
import CartContext from '../../Context/CartContext';
import '../../styles/_CartWidget.scss';
/* PARA EL CARRITO */

import Box from '@mui/material/Box';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';

import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';

import Tooltip from '@mui/material/Tooltip';

const CartWidget = () => {
  const { cartProducts, removeItem } = useContext(CartContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {!cartProducts.length ? (
        <div className="containerCartWidget">
          <Tooltip title="No tienes items en el carrito!">
            <ShoppingCartOutlinedIcon
              title="Tienes items en el carrito!"
              sx={{ width: 29, height: 29 }}
            />
          </Tooltip>
        </div>
      ) : (
        <React.Fragment>
          <Box
            sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}
          >
            <Tooltip title="Tienes items en el carrito!">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <div className="containerCartWidget">
                  <p className="cartCounter">{cartProducts.length}</p>
                  <ShoppingCartOutlinedIcon sx={{ width: 29, height: 29 }} />
                </div>
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            className="cartWidgetContainer"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            {cartProducts.map((cartProduct) => {
              return (
                <MenuItem className="cartWidget" key={cartProduct.id}>
                  <div className="cartWidgetImg">
                    <img
                      src={`${cartProduct.thumbnail}`}
                      alt={cartProduct.name}
                    />
                  </div>
                  <div className="CartWidgetInfo">
                    <p>{cartProduct.name}</p>
                    <p className="cartWidgetCantidad">
                      Cantidad: {cartProduct.cantidad}
                    </p>
                    <p>${cartProduct.price}</p>
                    <p>
                      <DeleteIcon
                        onClick={() => removeItem(cartProduct.id)}
                        className="cartDeleteIcon"
                        sx={{ width: 20, height: 20 }}
                      />
                    </p>
                  </div>
                </MenuItem>
              );
            })}

            <Divider />
            <MenuItem className="cartWidgetFooter">
              <Link to="/cart">
                <Button
                  style={{ justifyContent: 'center' }}
                  variant="contained"
                  size="small"
                  color="success"
                >
                  Finalizar Compra
                </Button>
              </Link>
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </>
  );
};

export default CartWidget;
