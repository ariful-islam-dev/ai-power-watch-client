
import { Route, Routes } from 'react-router'
import HomePage from './pages/Home'
import ShopPage from './pages/Shop'
import Orderpage from './pages/order'
import Auth from './pages/Auth'
import ProductDetails from './pages/ProductDetails'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addData } from './assets/reducer/dataReducer'

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    fetch("../../data/product.json")
      .then((res) => res.json())
      .then((data) => {
        dispatch(addData(data));
      })
  }, [dispatch]);
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/shop/:productId" element={<ProductDetails/>} />
      <Route path="/shop" element={<ShopPage/>} />
      <Route path="/order" element={<Orderpage/>} />
      <Route path="/login" element={<Auth/>} />
    </Routes>
  )
}

export default App
