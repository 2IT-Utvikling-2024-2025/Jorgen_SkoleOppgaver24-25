import { useState } from 'react'
import './App.css'

import Home from './comps/home'
import About from './comps/about'
import Layout from './comps/layout'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <Layout></Layout>
      <Routes>
        <route path='/'element={<Layout></Layout>}/>
          <route index element={<Home></Home>}/>
          <route path='about' element={<About></About>}/>

      </Routes>
    </BrowserRouter>

    
  )
}

export default App
