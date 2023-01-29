import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Servicios from './pages/Servicios'
import Portfolio from './pages/Portfolio'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './index.css'
import Prueba from './components/Prueba'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/servicios' element={<Servicios />} />
      <Route path='/portafolio' element={<Portfolio />} />
      <Route path='/prueba' element={<Prueba />} />
    </Routes>
  </BrowserRouter>
)
