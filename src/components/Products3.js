import React from 'react'
import { Spring } from 'react-spring/renderprops'
import Item1 from "./assets/images/daily_products/Aesop-Body-A-Rose-By-Any-Other-Name-Body-Cleanser-500mL-large.png"
import Item2 from "./assets/images/daily_products/Aesop-Body-Body-Cleansing-Slab-310g-Carton-Large-1584x962px.png"
import Item3 from "./assets/images/daily_products/Aesop-Body-Geranium-Leaf-Body-Cleanser-500mL-large.png"
import Item4 from "./assets/images/daily_products/Aesop-Body-Geranium-Leaf-Body-Scrub-180mL-large.png"
import Item5 from "./assets/images/daily_products/Aesop-Body-Redemption-Body-Scrub-180mL-large.png"

class Products3 extends React.Component {
    render() {
        return (
            <Spring 
            from={{opacity: 0, marginTop: -500}} 
            to = {{opacity: 1, marginTop: 0}}>
                {props => (
                    <div style={props}>
            <body>
            <div className="products3">
            <div className="prod3Description">
                <h5><b>For hands and body</b></h5>
                <h3>Daily cleansing</h3>
                <p>Ensure impeccable hygiene with our range of mild yet efficacious formulations.</p>
            </div>
            <div className="prod3Images">
                <img className="item1" src={Item1}></img>
                <img className="item5" src={Item5}></img>
                <img className="item2" src={Item2}></img>
                <img className="item3" src={Item3}></img>
                <img className="item4" src={Item4}></img>
            </div>
            </div>
            </body>
            </div>
            )}
            </Spring>
        )
    }
}


export default Products3;