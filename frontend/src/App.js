import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import HomeScreen from './screens/HomeScreen.jsx'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'

const  App = () => {
  return (
    <Router>
    <Header />
    <main className='py-3'>
      <Container>
        <Route path='/' component={HomeScreen}exact />
        <Route path='/product/:id' component={ProductScreen} />
        <Route path='/cart/:id?' component={CartScreen} />
      </Container>
    </main>
    <Footer />
    </Router>
  );
}

export default App;
