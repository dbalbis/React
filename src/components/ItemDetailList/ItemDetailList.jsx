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
            product={product}
            key={product.id} />
  </>
  
  )

}



export default ItemDetailContainer

  

  

