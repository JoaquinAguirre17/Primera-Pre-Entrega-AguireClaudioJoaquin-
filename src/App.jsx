import './App.css'
import Navar from './components/Navar/Navar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/HomeComponent/Home'
import ProductosComponent from './components/PruebaProductos/ProductosComponents'
import ProducView from './components/ProductView/ProductView'

function App() {


  return (
    <>
      <BrowserRouter>
        <Navar />
        <div className='container'>
          <div className='titulo'>
            <h1>Bienvenidos a Techno Shop</h1>
            </div>
          
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/detalle/:prodId' element={<ProducView />}></Route>
            <Route exact path='/categoria/:categoriaId' element={<ProductosComponent />}></Route>
          </Routes>
        </div>
      </BrowserRouter>

    </>
  )
}

export default App
