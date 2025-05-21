import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import ProductDetailPage from './components/ProductDetailPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/login' component={LoginPage} />
        <Route path='/product-detail' component={ProductDetailPage} />
        {/* More routes can be added here */}
      </Switch>
    </Router>
  );
}