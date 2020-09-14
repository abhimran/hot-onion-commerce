import React, { createContext, useState } from 'react';
import './App.css';
import Background from './components/Background/Background';
import FoodMenu from './components/FoodMenu/FoodMenu';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import foodData from './foodData'
import Cart from './components/Cart/Cart';

export const OnionContex = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const handleCart = (product) =>{
    const newCart = [...cart, product]
    setCart(newCart);
    // console.log('Product Addded', product);
  }
  return (
    <div className="App">
      <OnionContex.Provider value={[cart, setCart, handleCart]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Header></Header>
          </Route>
          <Route path="/cart">
            <Cart></Cart>
          </Route>
          <Route path="/">
              <Background></Background>
              <FoodMenu></FoodMenu>
              <WhyChooseUs></WhyChooseUs>
          </Route>
        </Switch>
         <Footer></Footer>
      </Router>
      </OnionContex.Provider>
    </div>
  );
}

export default App;
