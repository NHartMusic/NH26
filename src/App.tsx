
//dependencies
import { Routes, Route } from "react-router-dom"
import './App.css'
//ui elements
import { Header } from './ui'
//pages
import {Home, Music, Tech, Writing, Portfolio} from './pages'

function App() {

  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/music' element={<Music />} /> 
          <Route path='/tech' element={<Tech />} /> 
          <Route path='/writing' element={<Writing />} /> 
          <Route path='/portfolio' element={<Portfolio />} /> 
        </Routes>
      </div>
    </>
  )
}

export default App
