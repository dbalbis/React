import { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [cuantosProductos, setCuantosProductos] = useState();

  const addProductToCart = (product, productQuantity) => {
    const prodEncontrado = cartProducts.findIndex((producto) => {
      return producto.id === product.id;
    });

    if (prodEncontrado === -1) {
      product.cantidad = productQuantity;
      setCartProducts((cartProducts) => [...cartProducts, product]);
      cartCantProductos();
    } else {
      if (product.stock < product.cantidad + productQuantity) {
      } else {
        cartProducts[prodEncontrado].cantidad += productQuantity;
        cartCantProductos();
      }
    }
  };

  /* Remover item */
  const removeItem = (id) => {
    setCartProducts(cartProducts.filter((p) => p.id !== id));
  };

  /* Cantidad de Items CartWidget */
  const cartCantProductos = () => {
    let cantidad = 0;
    for (const producto of cartProducts) {
      cantidad = cantidad + producto.cantidad;
    }
    setCuantosProductos(cantidad);
    return cantidad;
  };

  /* Vaciar Carrito */

  const clearCart = () => {
    setCartProducts([]);
  };

  /* Restar un item */
  const restarUno = (id) => {
    const prodEncontrado = cartProducts.findIndex((producto) => {
      return producto.id === id;
    });
    if (prodEncontrado === -1) {
      return;
    } else {
      if (cartProducts[prodEncontrado].cantidad > 1) {
        cartProducts[prodEncontrado].cantidad -= 1;
        cartCantProductos();
      }
    }
  };

  /* Total */

  const cartTotal = () => {
    let total = 0;
    // eslint-disable-next-line array-callback-return
    cartProducts.map((product) => {
      total = total + product.price * product.cantidad;
    });
    return total;
  };

  const data = {
    cartProducts,
    cuantosProductos,
    addProductToCart,
    removeItem,
    clearCart,
    cartCantProductos,
    cartTotal,
    restarUno,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export { CartProvider };
export default CartContext;
