// App.jsx


import React from 'react'
import { useState, useReducer } from 'react';

const products = [
  { name: 'Mela', price: 0.5 },
  { name: 'Pane', price: 1.2 },
  { name: 'Latte', price: 1.0 },
  { name: 'Pasta', price: 0.7 },
];

const App = () => {

  const [lists, setLists] = useState(products)
  //📌 Milestone 1: Mostrare la lista dei prodotti
  // Obiettivo: Vedere un elenco leggibile di tutti i prodotti con nome e prezzo.
  return (
    <div>
      {lists.map((item, index) => (
        <div key={index}>
          <p><strong>{item.name}</strong>: {item.price}$</p>
        </div>
      ))}
    </div>
  )
}

export default App


