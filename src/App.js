import Container from '@mui/material/Container';
import './styles/_Body.scss';
import NavBar from './components/NavBar/NavBar';

import ListProducts from './components/ListProducts/ListProducts';
function App() {
  return (
    <>
      <NavBar />

      <main>
        <Container fixed className="ultimosProductos">
          <h2>Nuestros Productos</h2>
        </Container>
        <ListProducts />
      </main>
    </>
  );
}

export default App;
