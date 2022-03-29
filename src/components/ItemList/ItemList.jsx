import Card from '../Item/Item';
import '../../styles/_ItemList.scss';
import {productList} from '../../data/data.js'
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';




const CardList = () => {

  const [products, setProducts] = useState([])

  const getProducts = new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve(productList);
    },
    2000);
  }
  )

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getProductsFromDB = async () => {
    try {
      const result = await getProducts
      setProducts(result)
    } catch (error) {
      console.log (error)
      alert('Algo salio mal')
    }
  }

  useEffect(() => {
    getProductsFromDB();
  }, [getProductsFromDB]);

  return (
    
      
        products.length ? ( 
          <>
            {
              products.map((product) => {
                return (
                  
                  
      
                  <Grid item lg={4}>
        
        
                  <div key={product.id}>
                    <Card
                      name={product.name}
                      thumbnail={product.thumbnail}
                      price={product.price}
                      stock={product.stock}
                      id={product.id}
                    />
                  </div>
                  </Grid>
                  
                  
                  
                  
                );
              })
            }
          </>
        ) : (
          <p className='loadingText'>Esto te va a encantar...</p>
        )      
    
  );
};

export default CardList;
  










