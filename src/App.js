//import logo from './logo.svg';
import './App.css';
//import MyComponent from './components/MyComponent';
import NavBar from './components/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';

function App() {
  console.log('hola esto esta funcionando');
  
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos a Nuestra Tienda'} />
    </>
  );
}

export default App;
