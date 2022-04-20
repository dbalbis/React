import Card from '../Item/Item';
import '../../styles/_ItemList.scss';
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router-dom';
import {collection, getDocs} from 'firebase/firestore'
import db from '../../firebase'




const CardList = ({children}) => {
  
    const { category } = useParams()

    const [products, setProducts] = useState([])

    const getProducts = async () => {
      const itemCollection = collection (db, 'productos')
      const productoSnapshot = await getDocs(itemCollection)
      const productList = productoSnapshot.docs.map((doc) => {
        let product = doc.data()
        product.id = doc.id
        
        return product
        
      }

      )
      return productList
        
    } 

    useEffect( () => {
        setProducts([])
        getProducts().then( (productos ) => {
            category ? filterProductByCategory(productos, category) : setProducts(productos)
        })
    }, [category])


    const filterProductByCategory = (array , category) => {
        return array.map( (product, i) => {
            if(product.category === category) {
               return setProducts(products => [...products, product]);
            }
            return null;
        })
    }
return (
    
      
        
          <>
            {
              products.map((product) => {
                return (
                  
                  
      
                  <Grid item lg={4}>
        
        
                  <div key={product.id}>
                    <Card product={product}/>
                  </div>
                  </Grid>
                  
                  
                  
                  
                );
              })
            }
          </>
            
    
  );
};

export default CardList;


