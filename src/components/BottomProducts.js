import React, { Component } from "react";
import './assets/css/BottomProducts.css'
import Item1 from './assets/images/for_all_products/Aesop-Skin-Fabulous-Face-Oil-25mL-Large-684x668px.png';
import Item2 from './assets/images/for_all_products/Aesop-Skin-In-Two-Minds-Facial-Cleanser-200mL-Large-835x962px.png';
import Item3 from './assets/images/for_all_products/Aesop-Skin-Mandarin-Facial-Hydrating-Cream-60mL-large.png';
import Item4 from './assets/images/for_all_products/Aesop-SkinParsley-Seed-Facial-Cleanser-100mL-large.png';
import Item5 from './assets/images/for_all_products/AesopSkin-B-Tea-Balancing-Toner-200mL-large.png';




  export default class App extends Component {
    render() {
      return (
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
          <div className ="left-side">bottle pic here</div>
              <div className ="right-side">
                <h4>Discover more</h4>
              </div>
          </div>
          <div className ="bottom-section">
            <div className="contact"> <p>email address</p> </div>
            <div className="right-bottom">
              <div className ="left-column">contact us</div>
              <div className ="right-column">About</div>
            </div>
          </div>
          
        </div>
      );
    }
  }