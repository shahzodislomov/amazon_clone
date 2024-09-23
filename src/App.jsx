import { Route, Routes } from 'react-router'  
import Login from './pages/Login'
import Register from './pages/Register'
import NavBar from './components/Navbar'
import GetProductData from './components/getProductData'
import SingleProduct from './components/singleProduct'
import Cart from './components/Cart'

function App() {

  return (
    <>
    <NavBar />
     <Routes>
        <Route path='/' element={<GetProductData />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/singleproduct' element={<SingleProduct />}/>
        <Route path='/cart' element={<Cart/>}/>
     </Routes>
    </>
  )
}

export default App
