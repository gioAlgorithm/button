import React, { useState } from "react"
import "./App.css"
import data from "./Data"
import { CharacterContext } from "./context/characterContext"
import { Outlet } from "react-router-dom"


export default function SharedLayout(){


  // importing data
  const {character} = data

  const [cartItems, setCartItems] = useState([])

  const onAdd = (data) =>{
    const exist = cartItems.find((x)=> x.id === data.id)
    if(exist){
      setCartItems(
        cartItems.map(x => x.id === data.id ? {...exist, qty: exist.qty + 1 } : x)
      )
    }else{
      setCartItems([...cartItems, {...data, qty: 1}])
    }
  }

  const onRemove = (data) =>{
    const exist = cartItems.find((x)=> x.id === data.id)

    if(exist.qty === 1){
      setCartItems(cartItems.filter((x)=> x.id !== data.id))
    } else {
      setCartItems(cartItems.map((x) => x.id === data.id ? {...exist, qty: exist.qty -1} : x))
    }
  }

 


  return(
    <div className="app">
      <CharacterContext.Provider value={{onRemove, onAdd, cartItems, character}}>
        <Outlet />
      </CharacterContext.Provider>
    </div>
  )
}