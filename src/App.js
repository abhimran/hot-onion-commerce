import React from 'react';
import './App.css';
import Background from './components/Background/Background';
import FoodMenu from './components/FoodMenu/FoodMenu';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Background></Background>
      <FoodMenu></FoodMenu>
      <WhyChooseUs></WhyChooseUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
