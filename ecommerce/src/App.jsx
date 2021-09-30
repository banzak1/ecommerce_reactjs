import React from 'react'
import { Header } from "./components/Header"
import { ProductList } from "./components/Products"
import 'boxicons'

function App() {
  return (
    <div className="App">
      <Header />
      <ProductList />
    </div>
  );
}

export default App;
