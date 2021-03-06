import { useState, useEffect } from 'react';
import ItemDetailCard from '../ItemDetail/ItemDetail';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import db from '../../firebase';

const ItemDetailContainer = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  const newLocal = async () => {
    const docRef = doc(db, 'productos', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      let product = docSnap.data();
      product.id = docSnap.id;
      setProduct(product);
    } else {
      // doc.data() will be undefined in this case

      navigate('/pages/404');
    }
  };
  const getProduct = newLocal;

  useEffect(() => {
    getProduct();
  }, [getProduct, id]);

  return (
    <>
      <ItemDetailCard product={product} key={product.id} />
    </>
  );
};

export default ItemDetailContainer;
