import Container from '@mui/material/Container';
import '../../styles/_ItemListContainer.scss';
const ItemListContainer = (props) => {
  return (
    <>
      <Container fixed className="ultimosProductos">
        <h2>{props.message}</h2>
      </Container>
    </>
  );
};

export default ItemListContainer;
