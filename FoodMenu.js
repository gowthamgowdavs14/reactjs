
import React from 'react';
import foodData from './foodData';

function FoodMenu({ addToCart }) {
  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {foodData.map((food) => (
          <li key={food.id}>
            {food.name} - ${food.price}
            <button onClick={() => addToCart(food)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FoodMenu;
