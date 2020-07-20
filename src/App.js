import React, { Component } from 'react';
import { Transition, animated } from 'react-spring/renderprops';
import './App.css';
import Products2 from './components/Products2'
import Kits2 from './components/Kits2'
import Products3 from './components/Products3'
import Products1 from './components/Products1';
import Kits1 from './components/Kits1'
import TopBar from './components/TopBar';
import Header from './components/Header';
import Footer from './components/Footer';
import SlideShow from './components/SlideShow';
import BottomProducts from './components/BottomProducts';
import HiddenComponent from "./components/HiddenComponent";

class App extends Component {
  state = {
    showHiddenComponent: false
  }

  toggle = ev => this.setState({ showHiddenComponent: ! this.state.showHiddenComponent });
  // console.log("you clicked!!")
  render () {
  return (
    <div className="App">
      <TopBar />
      <Header toggle = { this.toggle }/>
      <Transition
      native
      items = {this.state.showHiddenComponent}
      from = {{ opacity : 0 }}
      enter= {{ opacity : 1 }}
      leave= {{ opacity : 0 }}
      >
          {show => show && (props => (
            <animated.div style={props}>
              <HiddenComponent />
            </animated.div>
          ))}
      </Transition>
      <hr/>
      <Products1 />
      <hr/>
      <Kits1 />
      <hr/>
      <Products2 />
      <hr/>
      <Kits2 />
      <hr/>
      <Products3 />
      <hr/>
      <SlideShow />
      <hr/>
      <BottomProducts />
      <Footer />
    </div>
  );
  }
}

export default App;
