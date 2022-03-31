import {useState, useEffect} from "react"
import ItemDetailCard from "../ItemDetail/ItemDetail";
import {itemDetail} from '../../data/itemDetail.js'


const ItemDetailContainer = () => {

  const [product, setProduct] = useState([])

  const getProduct = new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve(itemDetail);
    },
    2000);
  }
  )

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getProductFromDB = async () => {
    try {
      const result = await getProduct
      setProduct(result)
      console.log("Llamada al mock:", product)
    } catch (error) {
      console.log (error)
      alert('Algo salio mal')
    }
  }

  useEffect(() => {
    getProductFromDB();
    
  }, [getProductFromDB]);

  

  return (
    
      
        
          <>
            {
              product.map((product) => {
                return (
                  
                 
                  
                  
                  <>
                  
                  
            <ItemDetailCard thumbnail={product.thumbnail} 
          
          
            
            
            name={product.name}
            
            talle={product.talle}
            price={product.price}
            stock={product.stock}
            id={product.id}
            desc={product.desc} />
          

                  
                    {/* <ItemDetailCard 
                    thumbnail={product.thumbnail} 
                    name={product.name}
                    talle={product.talle}
                    price={product.price}
                    stock={product.stock}
                    id={product.id} /> */}
                  
                  </>

                    


        
      
                  
 
                  
                  
                  
                  
                  
                );
              })
            }
          </>
              
    
  );
};



export default ItemDetailContainer