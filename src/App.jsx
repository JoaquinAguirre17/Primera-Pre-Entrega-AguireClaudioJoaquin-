import './App.css';
import Navar from './components/Navar/Navar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from './Contex/CartContex';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetail from './components/ItemDetail/ItemDetail';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navar />
        <div className='container'>
          <Routes>
            <Route exact path='/' element={<ItemListContainer />} />
            <Route exact path='/carrito' element={<ItemDetailContainer />} />
            <Route exact path='/detalle/:prodId' element={<ItemDetail />} />
            <Route exact path='/categoria/:categoriaId' element={<ItemListContainer />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;


