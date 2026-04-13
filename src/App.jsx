import React from 'react'
import "./App.css"
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import { Outlet } from 'react-router'
import Listing from './components/Listing/Listing'
import Contact from './components/ContactUs/Contact'
import Footer from './components/Footer\'/Footer'

function App() {
  return (
    <>
      <Nav/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App