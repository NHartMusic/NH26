

//dependencies
import * as React from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'
//ui elements
import { Header } from './ui'
//pages
import {Home, Portfolio} from './pages'

function App() {

  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/portfolio' element={<Portfolio />} /> 
        </Routes>
      </div>
    </>
  )
}

export default App
