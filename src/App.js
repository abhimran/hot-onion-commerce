import React, { createContext, useEffect, useState } from 'react';
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
import FoodItemDetail from './components/FoodItemDetail/FoodItemDetail';
import { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart } from './utilities/databaseManager';

export const OnionContex = createContext();

function App() {
  const [cart, setCart] = useState([]);

  const removeProduct = (id) => {
    const newCart = cart.filter(pd=> pd.id !== id);
    setCart(newCart);
    removeFromDatabaseCart(id);
  }
  
  const handleCart = (product) =>{
    const newCart = [...cart, product]
    setCart(newCart);
    const sameProduct = newCart.filter(pd=> pd.id === product.id);
    const count = sameProduct.length;
    addToDatabaseCart(product.id, count);
  }
  useEffect(()=>{
    const saveCart = getDatabaseCart();
    const productKeys = Object.keys(saveCart);
    const cartProducts = productKeys.map(key =>{
      const product = foodData.find(pd=> pd.id == key);
      product.quantity = saveCart[key];
      return product;
    })
    setCart(cartProducts);
  }, [])
  return (
    <div className="App">
      <OnionContex.Provider value={[cart, setCart, handleCart, removeProduct]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Header></Header>
          </Route>
          <Route path="/cart">
            <Cart></Cart>
          </Route>
          <Route path="/detail/:id">
              <FoodItemDetail></FoodItemDetail>
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
