import React from 'react';
import './App.css';
import Products2 from './components/Products2'
import Kits2 from './components/Kits2'
import Products3 from './components/Products3'
import Products1 from './components/Products1';
import Kits1 from './components/Kits1'

function App() {
  return (
    <div className="App">
      <Products1 />
      <Kits1 />
      <Products2 />
      <Kits2 />
      <Products3 />
    </div>
  );
}

export default App;
