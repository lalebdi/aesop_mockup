import React from 'react'
import Item1 from "./assets/images/aromatic_signature_products/Aesop-Fragrance-Hwyl-Eau-de-Parfum-50mL-Large-684x668px.png"
import Item2 from "./assets/images/aromatic_signature_products/Aesop-Fragrance-Marrakech-Intense-Parfum-10mL-Large-684x668px.png"
import Item3 from "./assets/images/aromatic_signature_products/Aesop-Fragrance-Tacit-Eau-de-Parfum-50mL-Large-684x668px.png"
import Item4 from "./assets/images/aromatic_signature_products/Aesop-Home-Isabelle-Oil-Burner-Blend-25mL-large.png"
import Item5 from "./assets/images/aromatic_signature_products/Aesop-Home-Room-Spray-Istros-100mL-large.png"


class Products2 extends React.Component {
    render() {
        return (
            <body>
            <div className="products2">
            <div className="prod2Description">
                <h5><b>Fragrance</b></h5>
                <h3>An aromatic signature</h3>
                <p>Our bold, sophisticated fragrances- from Parfum and Eau de Parfum to Room Sprays-are meticulously crafted using high-quality ingredients.</p>
            </div>
            <div className="prod2Images">
                <img className="item5" src={Item5}></img>
                <img className="item5" src={Item1}></img>
                <img className="item5" src={Item4}></img>
                <img className="item5" src={Item3}></img>
                <img className="item5" src={Item2}></img>
            </div>
            </div>
            </body>
        )
    }
}


export default Products2;
