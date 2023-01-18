import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import ArticlePage from './pages/ArticlePage/ArticlePage'

function App() {

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
