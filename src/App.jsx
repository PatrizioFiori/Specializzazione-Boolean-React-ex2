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

  const [cart, setCart] = useState([])

  function addToCart(product) {
    const giaPresente = cart.some(item => item.name === product.name)
    if (giaPresente) {
      console.log("già presente nel carrello");
      return
    }
    setCart(curr => [...curr, { ...product, quantita: 1 }])
    console.log("aggiungo un nuovo prodotto");

  }


  return (
    <>
      <div>
        <h1>Prodotti</h1>
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              <p><strong>{product.name}</strong>: ( {product.price.toFixed(2)}€ )</p>
              <button
                onClick={() => addToCart(product)}
              //disabled={cart.some(item => item.name === product.name)}
              >Add product
              </button>
            </li>
          ))}
        </ul>
        {cart.length > 0 && (
          <>
            <h4>Carrello</h4>
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  <p> {item.quantita} x {item.name} ({item.price}€) </p>
                </li>
              ))}
            </ul>
          </>
        )}

      </div>

    </>
  )
}

export default App


//📌 Milestone 1: Mostrare la lista dei prodotti
// Obiettivo: Vedere un elenco leggibile di tutti i prodotti con nome e prezzo.
//📌 Milestone 2: Aggiungere prodotti al carrello
// Obiettivo: L’utente può aggiungere prodotti al carrello e vedere una lista dei prodotti aggiunti.

