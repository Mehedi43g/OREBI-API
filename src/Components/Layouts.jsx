import React from 'react'
import Header from './Header'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layouts = () => {
  return (
    <div>
      <Header/>
      <Nav/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layouts
