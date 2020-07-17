import React from 'react';
import './App.css';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <TopBar />
      <NavBar />
      <Header />
      <h1>Group Project</h1>
      <Footer />
    </div>
  );
}

export default App;
