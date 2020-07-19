import React from 'react'
import Item1 from "./assets/images/staple_products/Aesop-Body-Resurrection-Aromatique-Hand-Balm-75mL-large.png"
import Item2 from "./assets/images/staple_products/Aesop-Hand-Resurrection-Aromatique-Hand-Wash-500mL-large.png"
import Item3 from "./assets/images/staple_products/Aesop-Skin-Camellia-Nut-Facial-Hydrating-Cream-60mL-large.png"
import Item4 from "./assets/images/staple_products/Aesop-Skin-Purifying-Facial-Exfoliant-Paste-75mL-large.png"
import Item5 from "./assets/images/staple_products/Large-PNG-Aesop-Personal-Deodorant-50mL-large.png"

class Products1 extends React.Component {
    render() {
        return (
            <body>
            <div className="products1">
            <div className="prod1Description">
                <h3>A selection of staples</h3>
                <p>From beloved formulations first created decades ago to personal care necessities.</p>
            </div>
            <div className="prod1Images">
                <img className="item1" src={Item1}></img>
                <img className="item2" src={Item2}></img>
                <img className="item3" src={Item3}></img>
                <img className="item4" src={Item4}></img>
                <img className="item5" src={Item5}></img>
            </div>
            </div>
            </body>
        )
    }
}

export default Products1;