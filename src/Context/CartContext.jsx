import { createContext, useState } from 'react';

const CartContext = createContext();



const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const addProductToCart = (product, productQuantity) =>{


    //ya existe el producto en el carrito?
    const prodEncontrado = cartProducts.findIndex((producto)=>{
        return producto.id === product.id;
    })
    
    //si no existe lo agrego
    if(prodEncontrado === -1){
        console.log("no existe en el carrito, se agrega al array el producto: ", product)
        product.cantidad = productQuantity;
        setCartProducts(cartProducts=>[...cartProducts, product]);
    }else{
      
      //si ya existe valido que no se quiera agregar más de lo que hay en stock
        if (product.stock < (product.cantidad + productQuantity)){
            console.log("se pide más de lo que hay en stock")
        }else{
          
      //si da el stock, sumo
            console.log("existe y se agrega");
            cartProducts[prodEncontrado].cantidad += productQuantity;
        }
        
    }



   

}

  /* Remover item */
  const removeItem = (id) => {
    setCartProducts(cartProducts.filter(p => p.id !== id));
}

/* Cantidad de Items CartWidget */
const cartCantProductos = () => {
  let cantidad = 0;
  for(const producto of cartProducts){
      cantidad = cantidad + producto.cantidad;
      
  }
  return cantidad }

  /* Vaciar Carrito */

  const clearCart = () => {
    setCartProducts([])
  }

  /* Total */

  const cartTotal = () => {
    //precio total de los productos en el carrito considerando sus cantidades
    let total = 0;
    cartProducts.map((product)=>{
        total = total + product.price*product.cantidad;
    });
    return total
}

  

  
    

  

  const data = {
    cartProducts,
    addProductToCart,
    removeItem,
    clearCart,
    cartCantProductos,
    cartTotal
    
    
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export { CartProvider };
export default CartContext;
