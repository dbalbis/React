import { Container } from '@mui/material';
import { useContext, useState } from 'react';
import { Button } from '@mui/material';

import CartContext from '../Context/CartContext';
import { Link } from 'react-router-dom';

import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import db from '../firebase';
import { addDoc, collection } from 'firebase/firestore';
import '../styles/_Checkout.scss';
/* Modal */

import { DialogTitle } from '@mui/material';

import SimpleDialog from '../components/Modal/Modal';

const Checkout = () => {
  const { cartProducts, clearCart, cartTotal } = useContext(CartContext);

  const [setOpenModal] = useState(false);

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

  const [successOrder, setSuccessOrder] = useState();

  const addOrder = () => {
    setOpenModal(true);
  };

  const handleSubmit = (e) => {
    let prevOrder = { ...order, buyer: formData };
    e.preventDefault();
    setOrder({ ...order, buyer: formData });
    pushOrder(prevOrder);
  };

  const pushOrder = async (prevOrder) => {
    const orderFirebase = collection(db, 'ordenes');
    const orderDoc = await addDoc(orderFirebase, prevOrder);
    console.log('Orden generada', orderDoc.id);
    setSuccessOrder(orderDoc.id);
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
        {successOrder ? (
          <>
            <Container className="checkoutModalContainer">
              <SimpleDialog open={() => addOrder()}>
                <Container className="checkoutModalInfo">
                  <DialogTitle>Compra realizada con exito.</DialogTitle>

                  <p className="modalInfo">El id de su compra es:</p>
                  <p className="modalInfoId">{successOrder}</p>

                  <p className="btnFinalizar">
                    <Link to="/">
                      <Button
                        onClick={clearCart}
                        variant="outlined"
                        color="success"
                      >
                        Finalizar
                      </Button>
                    </Link>
                  </p>
                </Container>
              </SimpleDialog>
            </Container>
            {/* <h1>Hola</h1>
            <p>Orden numero: {successOrder} </p> */}
          </>
        ) : (
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
            <form onSubmit={handleSubmit}>
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
        )}
      </Container>
    </>
  );
};

export default Checkout;
