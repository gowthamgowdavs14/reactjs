// src/App.js
import React, { useState } from 'react';
import './App.css';
import FoodMenu from './FoodMenu';
import ShoppingCart from './ShoppingCart';
import OrderSummary from './OrderSummary';
import foodData from './foodData';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (food) => {
    setCart([...cart, food]);
  };

  const removeFromCart = (food) => {
    const updatedCart = cart.filter((item) => item.id !== food.id);
    setCart(updatedCart);
  };

  return (
    <div className="App">
      <FoodMenu addToCart={addToCart} />
      <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
      <OrderSummary cart={cart} />
    </div>
  );
}

export default App;
