import Card from '../Item/Item';
import '../../styles/_ItemList.scss';
import {productList} from '../../data/data.js'
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router-dom';




const CardList = ({children}) => {
  
    const { category } = useParams()

    const [products, setProducts] = useState([])

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            return resolve(productList)
        })
    } 

    useEffect( () => {
        setProducts([])
        getProducts().then( (productos) => {
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


