import {useState, useEffect} from "react"
import ItemDetailCard from "../ItemDetail/ItemDetail";
import {productList} from '../../data/data.js'
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([])
  const {id} = useParams()
  console.log('id de ruta:',id)
  

useEffect(() => {
  console.log('Mock productos:', productList)
  filterProductById(productList, id) }, [id])

const filterProductById = (array, id) => {
  // eslint-disable-next-line array-callback-return
  return array.map((product) => {
    console.log ("map product")
    // eslint-disable-next-line eqeqeq
    if (product.id == id) {
      return setProduct (product)    }
  } )
}

return (
  <>
  <ItemDetailCard 
            thumbnail={product.thumbnail} 
            name={product.name}
            talle={product.talle}
            price={product.price}
            stock={product.stock}
            id={product.id}
            desc={product.desc} />
  </>
  
  )

}



export default ItemDetailContainer

  

  

