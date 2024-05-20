import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Authentication from './pages/Authentication'
import { PropertyPage } from './pages/PropertyPage'
import Properties from './pages/Properties'
import { List } from './pages/List'

function App() {

  return (
    <div className='min-h-screen h-full w-full flex flex-col'>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={<Authentication/>}/>
        <Route path='/property' element={<Properties/>}/>
        <Route path='/property/:id' element={<PropertyPage/>}/>
        <Route path='/add' element={<List/>}/>
      </Routes>
    </div>
  )
}

export default App
