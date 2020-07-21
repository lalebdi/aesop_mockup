import React from 'react'
import { Spring } from 'react-spring/renderprops';
import Carousel from 'react-elastic-carousel';
import Item from "./Item";
import Item1 from "./assets/images/aromatic_signature_products/Aesop-Fragrance-Hwyl-Eau-de-Parfum-50mL-Large-684x668px.png"
import Item2 from "./assets/images/aromatic_signature_products/Aesop-Fragrance-Marrakech-Intense-Parfum-10mL-Large-684x668px.png"
import Item3 from "./assets/images/aromatic_signature_products/Aesop-Fragrance-Tacit-Eau-de-Parfum-50mL-Large-684x668px.png"
import Item4 from "./assets/images/aromatic_signature_products/Aesop-Home-Isabelle-Oil-Burner-Blend-25mL-large.png"
import Item5 from "./assets/images/aromatic_signature_products/Aesop-Home-Room-Spray-Istros-100mL-large.png"


const breakPoints = [
    {width : 1 , itemsToShow: 1 },
    {width : 550 , itemsToShow: 2 },
    {width : 768 , itemsToShow: 3 },
    {width : 1200 , itemsToShow: 4 }
];


class Products2 extends React.Component {
    render() {
        return (
            <Spring 
            from={{opacity: 0, marginTop: -500}} 
            to = {{opacity: 1, marginTop: 0}}>
                {props => (
                    <div style={props}>
            <body>
            <div className="products2">
            <div className="prod2Description">
                <h5><b>Fragrance</b></h5>
                <h3>An aromatic signature</h3>
                <p>Our bold, sophisticated fragrances- from Parfum and Eau de Parfum to Room Sprays-are meticulously crafted using high-quality ingredients.</p>
            </div>
            <div className="prod2Images">
            <Carousel breakPoints={breakPoints}>
                <Item><img className="item1" src={Item1}></img></Item>
                <Item><img className="item2" src={Item2}></img></Item>
                <Item><img className="item3" src={Item3}></img></Item>
                <Item><img className="item4" src={Item4}></img></Item>
                <Item><img className="item5" src={Item5}></img></Item>
            </Carousel>
            </div>
            </div>
            </body>
            </div>
            )}
            </Spring>
        )
    }
}


export default Products2;
