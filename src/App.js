import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductsScreen from './screens/ProductsScreen'
import ProductScreen from './screens/ProductScreen'
import HomeScreen from './screens/HomeScreen'

function App() {
  return (
    <Router>
      <Header />
      <Container fluid style={{ padding: '0' }}>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/species/:keyword' component={ProductsScreen} />
        <Route path='/product/:keyword/:id' component={ProductScreen} />
      </Container>
      <Footer />
    </Router>
  )
}

export default App
