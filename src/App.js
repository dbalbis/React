import './styles/_Body.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <>
      <NavBar />

      <main>
        <ItemListContainer message="Nuestros Productos" />

        <ItemDetailContainer />
      </main>
    </>
  );
}

export default App;
