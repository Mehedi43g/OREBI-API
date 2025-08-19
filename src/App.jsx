
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Layouts from './Components/Layouts'
import About from './Pages/About'
import Shop from './Pages/Shop'
import Contacts from './Pages/Contacts'
import Journal from './Pages/Journal'
import ProductDetails from './Pages/ProductDetails'
let router= createBrowserRouter(createRoutesFromElements(
  <Route element={<Layouts/>}>
    <Route index element={<Home/>}></Route>
    <Route path='/shop' element={<Shop/>}></Route>
    <Route path='/shop/:id' element={<ProductDetails/>}></Route>
    
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contacts' element={<Contacts/>}></Route>
    <Route path='/journal' element={<Journal/>}></Route>
  </Route>
))
function App() {

  return (
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
