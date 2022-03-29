import './styles/_Body.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />

      <main>
        <ItemListContainer message="Nuestros Productos" />
      </main>
    </>
  );
}

export default App;
