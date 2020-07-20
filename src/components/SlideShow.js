import React from 'react';
import { Slide } from 'react-slideshow-image';
import { Spring } from 'react-spring/renderprops';
import 'react-slideshow-image/dist/styles.css'
import './assets/css/SlideShow.css';
import { FiArrowRight } from 'react-icons/fi';
import Item1 from "./assets/images/Aesop-Bleecker-Street-Carousel-1-Desktop-2560x1440px.jpg"
import Item2 from "./assets/images/Aesop-Downtown-LA-Carousel-3-Desktop-2560x1440px.jpg";
import Item3 from "./assets/images/Aesop-Fashion-Valley-Carousel-1-Desktop-2560x1440px.jpg";
import Item4 from "./assets/images/Aesop-Free-Market-Carousel-1-Desktop-2560x1440px.png";
import Item5 from "./assets/images/Store-Detail-US-Wynwood-Hero-1-Desktop-2880x1620.jpg"

const SlideShow = () => {
    return (
      <Spring 
      from = {{ opacity : 0 , marginTop : -500}}
      to = {{ opacity : 1 , marginTop : 0}}
      config = {{ delay : 2000 , duration : 2000}}
      >
        { props => (
          <div style = {props}>
              <div className= "big-wrapper">
        <div className= "description2">
          <div className="design">
            <div className="top-line"> <h5> Architecture and Design </h5> </div>
            <div className = "bottom-line"> <h4> Spaces of distinction </h4> </div>
          </div>
          <div className="store-finder">
            <p> Aesop stores are informed by the history, fabric and context of their local environments yet retain an aesthetic consistency</p>
            <button className="btn" > Find a nearby store <FiArrowRight /> </button>
          </div>
        </div>
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${Item1})`}}>
              {/* <span> Bleeker St.</span> */}
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${Item2})`}}>
              {/* <span>Downtown LA</span> */}
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${Item3})`}}>
              {/* <span>Fashion Valley</span> */}
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${Item4})`}}>
              {/* <span>Free Market</span> */}
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${Item5})`}}>
              {/* <span>Wynwood</span> */}
            </div>
          </div>
        </Slide>
      </div>
      </div>
          </div>
        )}

      </Spring>
      
    )
}

export default SlideShow