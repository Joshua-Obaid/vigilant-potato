import { useState } from 'react'
import './App.css'
import Index from './pages/Index'
import Shop from './pages/Shop'
import WhyUs from './pages/WhyUs'
import Contact from './pages/Contact'
import Testimonials from './pages/Testimonials'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/whyUs' element={<WhyUs/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/testimonials' element={<Testimonials/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
