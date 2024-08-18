import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'

import './App.css'
import NavBar from './components/navbar'

function App() {

  return (
    <>
     <div className='min-h-screen p-6 bg-white text-gray-600 text-lg'>
        <NavBar/>
     </div>
    </>
  )
}

export default App
