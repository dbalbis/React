import { Container } from '@mui/material';
import { useContext, useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { Divider } from '@mui/material';
import CartContext from '../Context/CartContext';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import '../styles/_Cart.scss';

const Cart = () => {
  const {
    cartProducts,
    removeItem,
    restarUno,
    addProductToCart,
    clearCart,
    cartTotal,
  } = useContext(CartContext);
  const [totalDelCart, setTotalDelCart] = useState(cartTotal);

  const handleOneLess = (id) => {
    restarUno(id);
    setTotalDelCart(cartTotal);
  };
  const handleOneMore = (product, uno) => {
    addProductToCart(product, uno);
    setTotalDelCart(cartTotal);
  };

  useEffect(() => {}, [totalDelCart]);

  return (
    <>
      {!cartProducts.length ? (
        <Container className="cartContainer">
          <Container className="cartContainerContext">
            <h1>Tu carrito está vacío!</h1>
            <p>
              Haz click en el botón para comenzar a navegar en nuestro sitio.
            </p>
            <Link to="/">
              <Button
                variant="contained"
                size="small"
                color="success"
                className="btnComprarDetail2"
              >
                Comenzar Compra
              </Button>
            </Link>
          </Container>
        </Container>
      ) : (
        <Container className="cartContainerItems">
          <h1>Ya casi está listo ...</h1>

          <Container className="cartContainerContext">
            <h3 className="subTotal">SubTotal</h3>
          </Container>
          <Divider />
          {cartProducts.map((product) => {
            return (
              <Container className="cartContainerContext" key={product.id}>
                <div className="itemCart">
                  {' '}
                  <span className="itemProps">
                    {product.name}
                    <Button
                      className="deleteIconCart"
                      title="Quitar una unidad"
                    >
                      <RemoveIcon
                        onClick={() => {
                          handleOneLess(product.id);
                        }}
                        className="cartDeleteIcon"
                        sx={{ width: 15, height: 15 }}
                      />
                    </Button>
                    <span className="productCantidad">{product.cantidad}</span>
                    <Button
                      className="deleteIconCart"
                      title="Agregar una unidad"
                    >
                      <AddIcon
                        onClick={() => {
                          handleOneMore(product, 1);
                        }}
                        className="cartDeleteIcon"
                        sx={{ width: 15, height: 15 }}
                      />
                    </Button>
                    <Button className="deleteIconCart" title="Remover Item">
                      <DeleteIcon
                        onClick={() => removeItem(product.id)}
                        className="cartDeleteIcon"
                        sx={{ width: 20, height: 20 }}
                      />
                    </Button>
                  </span>{' '}
                  <span className="productPrice">
                    ${product.price * product.cantidad}
                  </span>
                  <Divider />
                </div>
              </Container>
            );
          })}
          <p className="buttonClear">
            <Button onClick={clearCart}>Vaciar Carrito</Button>
          </p>
          <p className="cartTotal">Total: ${cartTotal()}</p>
          <Link to="/checkout">
            <p className="checkoutButton">
              <Button variant="contained" size="large" color="success">
                Checkout
              </Button>
            </p>
          </Link>
        </Container>
      )}
    </>
  );
};

export default Cart;
