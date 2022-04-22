import { Container } from '@mui/material';
import { useContext, useState } from 'react';
import { Button } from '@mui/material';
import { Divider } from '@mui/material';
import CartContext from '../Context/CartContext';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import '../styles/_Checkout.scss';

const Checkout = () => {
  const { cartProducts, removeItem, clearCart, cartTotal } =
    useContext(CartContext);

  const [formData, setFormData] = useState({
    name: '',
    apellido: '',
    adress: '',
    phone: '',
    email: '',
  });

  const [order, setOrder] = useState({
    buyer: formData,
    items: cartProducts.map((cartProduct) => {
      return {
        id: cartProduct.id,
        title: cartProduct.name,
        cantidad: cartProduct.cantidad,
        price: cartProduct.price,
      };
    }),
    total: cartTotal(),
  });
  console.log('order', order);

  const addOrder = () => {
    alert('hola');
  };

  const handleSubmit = () => {
    setOrder({ ...order, buyer: formData });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log('target', e.target.value, e.target.name);
  };

  return (
    <>
      <Container className="checkoutContainer">
        <Box
          sx={{
            m: 'auto',
            width: 500,
            maxWidth: '100%',
          }}
        >
          <Typography gutterBottom variant="h5">
            Datos de envio
          </Typography>
          {console.log('Objeto', formData)}
          <form>
            <TextField
              onChange={handleChange}
              value={formData.name}
              name="name"
              placeholder="Ingresa tu nombre"
              margin="normal"
              fullWidth
              required
              label="Nombre"
              id="name"
            />
            <TextField
              onChange={handleChange}
              value={formData.apellido}
              name="apellido"
              placeholder="Ingresa tu apellido"
              margin="normal"
              fullWidth
              label="Apellido"
              id="apellido"
            />
            <TextField
              onChange={handleChange}
              value={formData.adress}
              name="adress"
              placeholder="Ingresa tu Dirección"
              margin="normal"
              fullWidth
              required
              label="Dirección"
              id="adress"
            />
            <TextField
              onChange={handleChange}
              name="phone"
              type="number"
              placeholder="Ingresa tu Telefono"
              margin="normal"
              fullWidth
              required
              label="Telefono"
              id="phone"
            />
            <TextField
              onChange={handleChange}
              name="email"
              placeholder="Ingresa tu Email"
              margin="normal"
              type="email"
              fullWidth
              required
              label="Email"
              id="email"
            />
            <FormHelperText id="email">
              Acá te llegara la factura.
            </FormHelperText>
            <Button
              onClick={addOrder}
              type="submit"
              value="submit"
              margin="normal"
              variant="contained"
              color="success"
              fullwidth
            >
              COMPLETAR LA COMPRA
            </Button>
          </form>
        </Box>
      </Container>
    </>
  );
};

export default Checkout;
