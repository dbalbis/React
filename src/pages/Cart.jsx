import { Container } from "@mui/material"
import { useContext} from "react"
import { Button } from "@mui/material"
import { Divider } from "@mui/material"
import CartContext from "../Context/CartContext"
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';

import '../styles/_Cart.scss'


const Cart = () => {
  const {cartProducts, removeItem, clearCart, cartTotal} = useContext(CartContext)
  


  return (

    

    <>

{!cartProducts.length ? (
  <Container className="cartContainer">
    <Container className="cartContainerContext">
                <h1>Tu carrito está vacío!</h1>
                <p>Haz click en el botón para comenzar a navegar en nuestro sitio.</p>
                <Link to='/'><Button  variant="contained" size="small" color="success" className="btnComprarDetail2">Comenzar Compra
                                </Button>
                                </Link>
                </Container>
                
                </Container>
              ) : (
                <Container className="cartContainerItems">
                <h1>Ya casi está listo ...</h1>
                <Divider/>
                {cartProducts.map((product)=>{
                                        return(
                                          <Container className="cartContainerContext">
                                            
                                          <div className="itemCart"> <span className="itemProps">{product.name} ({product.cantidad})<Button className="deleteIconCart"><DeleteIcon
                    onClick={() => removeItem(product.id)}
                    className="cartDeleteIcon"
                    sx={{ width: 20, height: 20 }}
                  /></Button></span> <span className="productPrice">${product.price}</span>
                                          <Divider/>
                                          </div>
                                          </Container>
                                          )
                                        })}
                                        <p className="buttonClear">
                                        <Button onClick={clearCart}>Vaciar Carrito</Button></p>
                                        <p className="cartTotal">Total: ${cartTotal()}</p>
                                        <p className="checkoutButton"><Button variant="contained" size="large" color ="success">Checkout</Button></p>
                </Container> 
              )}

    
    </>
  )
}

export default Cart