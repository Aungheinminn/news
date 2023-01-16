import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import Home from './components/Home/Home'
import ArticlePage from './pages/ArticlePage/ArticlePage'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article" element={<ArticlePage /> } />

      </Routes>
    </div>
  )
}

export default App
