import { Container } from "@mui/material"
import { useContext, useState } from "react"
import { Button } from "@mui/material"
import CartContext from "../Context/CartContext"

import '../styles/_Cart.scss'


const Cart = () => {
  const {cartProducts, removeItem, clearCart, cartTotal, addProductToCart} = useContext(CartContext)
  const [totalDelCart, setTotalDelCart] = useState(cartTotal);

  const handleOneLess = (id) =>{
    setTotalDelCart(cartTotal);
}
const handleOneMore = (product, uno) =>{
    addProductToCart(product, uno);
    setTotalDelCart(cartTotal);
}

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
                            <h3>Total:{cartTotal()}</h3>
    </Container>
    </>
  )
}

export default Cart