import { Container } from "@mui/material"
import { useContext } from "react"
import { Button } from "@mui/material"
import CartContext from "../Context/CartContext"

import '../styles/_Cart.scss'


const Cart = () => {
  const {cartProducts, removeItem, clearCart} = useContext(CartContext)
  return (
    <>
    <Container className="cartContainer">
    <h1>Ya casi está listo ...</h1>
    {cartProducts.map((product)=>{
                            return(
                              <div><h3>{product.name} ${product.price} ({product.cantidad})<Button onClick={() => removeItem(product.id)}>X</Button></h3>
                              
                              </div>
                              )
                            })}
                            <Button onClick={clearCart}>Vaciar Carrito</Button>
    </Container>
    </>
  )
}

export default Cart