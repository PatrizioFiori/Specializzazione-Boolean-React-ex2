// App.jsx
import React from 'react'
import { useState, useReducer } from 'react';

const products = [
  { name: 'Mela', price: 0.5 },
  { name: 'Pane', price: 1.2 },
  { name: 'Latte', price: 1.0 },
  { name: 'Pasta', price: 0.7 },
];

const initialState = []


const App = () => {

  const [cartState, dispatch] = useReducer(cartReducer, initialState)

  function cartReducer(cartState, action) {
    switch (action.type) {

      case 'ADD_ITEM':  //logica aggiunta elementi dal carrello
        const giaPresente = cartState.find(item => item.name === action.payload.name)
        if (giaPresente) {
          return cartState.map(item =>
            item.name === action.payload.name
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
        return [...cartState, { ...action.payload, quantity: 1 }]

      case 'REMOVE_ITEM': //logica rimozione elementi dal carrello
        return cartState.map(item =>
          item.name === action.payload.name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ).filter(item => item.quantity > 0)

      case 'UPDATE_QUANTITY': // Logica per aggiornare la quantità
        return cartState.map(item =>
          item.name === action.payload.name
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      default:
        return state;
    }
  }

  return (
    <>
      <div>
        <h3>Prodotti</h3>
        <ul>
          {products.map(product => (
            <li key={product.name}>
              <p>{product.name} - {product.price.toFixed(2)} € </p>
              <button onClick={() => dispatch({ type: "ADD_ITEM", payload: product })}>
                Aggiungi
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4>Carrello</h4>
        <ul>
          {cartState.map(item => (
            <li key={item.name}>
              <input
                type="number"
                min={1}
                value={item.quantity}
                onChange={e =>
                  dispatch({
                    type: "UPDATE_QUANTITY",
                    payload: { name: item.name, quantity: parseInt(e.target.value) }
                  })
                }
              />
              <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item })}>
                Rimuovi
              </button>
            </li>
          ))}
        </ul>

        <h3>
          Totale:{" "}
          {cartState
            .reduce((acc, item) => acc + item.price * item.quantity, 0)
            .toFixed(2)}{" "}€
        </h3>
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
// 🎯 Bonus 1: Modifica dinamica delle quantità
// Obiettivo: Consentire una modifica precisa e dinamica delle quantità direttamente nel carrello.
// 🎯 Bonus 2: Usare useReducer per gestire lo stato del carrello
// Obiettivo: Migliorare la struttura del codice utilizzando un approccio più scalabile e organizzato.
// 🎯 Bonus 2: Usare useReducer per gestire lo stato del carrello
// Obiettivo: Migliorare la struttura del codice utilizzando un approccio più scalabile e organizzato.