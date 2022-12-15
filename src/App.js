import Cart from "./card/Cart"
import ProductCard from "./card/ProductCard"
import React from "react"
import { Routes, Route } from "react-router-dom"
import SharedLayout from "./sharedLayout"

export default function App(){
  return(
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<ProductCard />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  )
}
