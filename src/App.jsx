
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Shop from './Components/Shop'
import Layouts from './Components/Layouts'
import About from './Components/About'
import Contacts from './Components/Contacts'
import Journal from './Components/Journal'
let router= createBrowserRouter(createRoutesFromElements(
  <Route element={<Layouts/>}>
    <Route index element={<Home/>}></Route>
    <Route path='/shop' element={<Shop/>}></Route>
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
