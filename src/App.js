import React from 'react'
import {} from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Header />
      <main
        style={{ background: '#e5e5e5', height: '100vh' }}
        className='py-3'
      ></main>
      <Footer />
    </Router>
  )
}

export default App
