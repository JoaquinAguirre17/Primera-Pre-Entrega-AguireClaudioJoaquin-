import './App.css'
import Navar from './components/Navar/Navar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProducView from './components/ProductView/ProductView'
import { CartProvider } from './Contex/CartContex'
import CartComponent from './components/CartComponent/CartComponent'
import ProductsComponent from './components/ProductsComponent/ProductsComponent'


function App() {


  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navar />
          <div className='container'>
            <div className='titulo'>
              <h1>Bienvenidos a Techno Shop</h1>
            </div>
            <Routes>
              <Route exact path='/' element={<ProductsComponent />}></Route>
              <Route exact path='/carrito' element={<CartComponent/>}></Route>
              <Route exact path='/detalle/:prodId' element={<ProducView />}></Route>
              <Route exact path='/categoria/:categoriaId' element={<ProductsComponent/>}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </CartProvider>


    </>
  )
}

export default App
