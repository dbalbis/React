import './styles/_Body.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ListProducts from './components/ListProducts/ListProducts';
function App() {
  return (
    <>
      <NavBar />

      <main>
        <ItemListContainer message="Nuestros Productos" />
        <ListProducts />
      </main>
    </>
  );
}

export default App;
