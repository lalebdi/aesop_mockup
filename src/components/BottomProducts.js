import React, { Component } from "react";
import { Spring } from 'react-spring/renderprops';
import './assets/css/BottomProducts.css'
import Item1 from './assets/images/for_all_products/Aesop-Skin-Fabulous-Face-Oil-25mL-Large-684x668px.png';
import Item2 from './assets/images/for_all_products/Aesop-Skin-In-Two-Minds-Facial-Cleanser-200mL-Large-835x962px.png';
import Item3 from './assets/images/for_all_products/Aesop-Skin-Mandarin-Facial-Hydrating-Cream-60mL-large.png';
import Item4 from './assets/images/for_all_products/Aesop-SkinParsley-Seed-Facial-Cleanser-100mL-large.png';
import Item5 from './assets/images/for_all_products/AesopSkin-B-Tea-Balancing-Toner-200mL-large.png';
import Item6 from './assets/images/Aesop-Kits-Nashville-with-Product-Large-888x776px.png';




  export default class App extends Component {
    render() {
      return (
        <Spring
        from = {{ opacity : 0} }
        to = {{ opacity : 1 }}
        config = {{ delay : 1000 , duration : 1000}}
        >
            {props => (
              <div style = {props}>
            <div className="big-wrapper2">
          <div className ="top-section">
            <div className ="formulations">
              <h5>Nuturing Formulations</h5>
              <h4>For all ages, genders and skin types</h4>
              <p> Healthy skin is the product of careful cleansing, nourshing hydrations and protection against environmental factors</p>
            </div>
            <div className ="products-lineup">
              <img className="imgs" src={Item1} alt ="Products" />
              <img className="imgs" src={Item2} alt ="Products" />
              <img className="imgs" src={Item3} alt ="Products" />
              <img className="imgs" src={Item4} alt ="Products" />
              <img className="imgs" src={Item5} alt ="Products" />
            </div>
          </div>
          <div className ="middle-section">
          <div className ="left-side">
            <img className="imgs" src = {Item6} alt = "Nashville"/>
          </div>
              <div className ="right-side">
              <br/>
                <div className= "left-part">
                <h3>Discover more</h3>
                <h4>Kits & duets</h4>
                <p>Travel</p>
                <p>Goft Kits</p>
                <p>Skin</p>
                <p>Hand & body</p>
                </div>
                <div className= "right-part">
                <br/>
                <br/>
                <h4>Hair care</h4>
                <p>Cleanse</p>
                <p>Condition</p>
                <p>Treat</p>
                <p>Groom</p>
                </div>
              </div>
          </div>
          <div className ="bottom-section">
            <div className="contact">
              <p>I would like to recieve communications about Aesop products, services, stores, events and matters of cultural interest</p> 
              <br/>
              <input type="text" placeholder="Email Address" className="input-field"></input>
              </div>
            <div className="right-bottom">
              <div className ="left-column"> 
                <strong>Contact us</strong> 
                <p>Contact us</p>
                <p>FAQs</p>
                <p>Delivery and Returns</p>
                <p>Track your order</p>
                <p>Check Gift Card Balance</p>
                <p>Terms and conditions</p>
                <p>Accessbility</p>
                </div>
              <div className ="middle-column">
              <strong>About</strong>
                <p>Our story</p>
                <p>Careers</p>
                <p>Press</p>
                <p>Corporate gifts</p>
                <p>Facial appoitments</p>
              </div>
              <div className ="right-column">
              <strong>Social</strong>
                <p>Instagram</p>
                <p>Twitter</p>
                <p>Linkedin</p>
              </div>
            </div>
          </div>
          
        </div>

              </div>
            ) }

        </Spring>
        
      );
    }
  }