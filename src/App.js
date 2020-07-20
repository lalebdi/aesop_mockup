import React, { Component } from 'react';
import { Transition, animated } from 'react-spring/renderprops';
import './App.css';
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
      
      {/* <h1>Group Project</h1> */}
      <SlideShow />
      <BottomProducts />
      <Footer />
    </div>
  );
  }
}

export default App;
