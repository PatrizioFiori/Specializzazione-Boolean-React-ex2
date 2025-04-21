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

  function updateProductQuantity(product) {
    setCart(currentCart =>
      currentCart.map(item => {
        if (item.name === product.name) {
          return { ...item, quantita: item.quantita + 1 }
        }
        return item
      }
      )
    );
  }

  function reduceProductQuantity(product) {
    setCart(currentCart =>
      currentCart.map(item => {
        if (item.name === product.name) {
          const nuovaQuantita = item.quantita - 1
          if (nuovaQuantita <= 0) return null;
          return { ...item, quantita: nuovaQuantita };

        }

        return item;
      })
        .filter(item => item !== null)

    );
  }


  function addToCart(product, index) {
    const giaPresente = cart.some(item => item.name === product.name)
    if (giaPresente) {
      updateProductQuantity(product)
      console.log("aggiungo +1 alla quantità di " + product.name);
      return
    }
    setCart(curr => [...curr, { ...product, quantita: 1 }])
    console.log("aggiungo un nuovo prodotto");
    return
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
                onClick={() => addToCart(product, index)}
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
                  <p> {item.quantita} x {item.name} ({(item.price * item.quantita).toFixed(2)} €) </p>
                  <button onClick={() => { reduceProductQuantity(item) }}>Rimuovi un prodotto</button>
                </li>
              ))}
            </ul>
            <h3>
              Prezzo totale: {cart.reduce((acc, curr) => acc + curr.price * curr.quantita, 0).toFixed(2)} €
            </h3>

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
// 📌 Milestone 3: Modificare il carrello
// Obiettivo: Gestire l’aggiunta, la rimozione e il calcolo del totale del carrello in modo dinamico.