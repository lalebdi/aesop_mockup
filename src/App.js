import React from 'react';
import './App.css';
import Products2 from './components/Products2'
import Kits2 from './components/Kits2'
import Products3 from './components/Products3'
import Products1 from './components/Products1';
import Kits1 from './components/Kits1'
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Products1 />
      <Kits1 />
      <Products2 />
      <Kits2 />
      <Products3 />
      <TopBar />
      <NavBar />
      <Header />
      <h1>Group Project</h1>
      <Footer />
    </div>
  );
}

export default App;
