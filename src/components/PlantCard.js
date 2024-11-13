
import { useState } from 'react';
import React from "react";





function PlantCard({ plant, sellplant }) {
  const{name, price, image}=plant
  
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {!plant.sold? (
        <button className="primary" onClick={() => sellplant(plant)}>In Stock</button>) : (
        <button>Out of Stock</button>)}
    </li>
  );
}



export default PlantCard;
