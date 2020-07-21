import React from 'react'
import { Spring } from 'react-spring/renderprops'
import Carousel from 'react-elastic-carousel';
import Item from "./Item";
import Item1 from "./assets/images/staple_products/Aesop-Body-Resurrection-Aromatique-Hand-Balm-75mL-large.png"
import Item2 from "./assets/images/staple_products/Aesop-Hand-Resurrection-Aromatique-Hand-Wash-500mL-large.png"
import Item3 from "./assets/images/staple_products/Aesop-Skin-Camellia-Nut-Facial-Hydrating-Cream-60mL-large.png"
import Item4 from "./assets/images/staple_products/Aesop-Skin-Purifying-Facial-Exfoliant-Paste-75mL-large.png"
import Item5 from "./assets/images/staple_products/Large-PNG-Aesop-Personal-Deodorant-50mL-large.png"


const breakPoints = [
    {width : 1 , itemsToShow: 1 },
    {width : 550 , itemsToShow: 2 },
    {width : 768 , itemsToShow: 3 },
    {width : 1200 , itemsToShow: 4 }
];

class Products1 extends React.Component {
    
    render() {
        
        return (
            <Spring 
            from={{opacity: 0, marginTop: -500}} 
            to = {{opacity: 1, marginTop: 0}}>
                {props => (
                    <div style={props}>
                        <body>
            <div className="products1">
            <div className="prod1Description">
                <h3>A selection of staples</h3>
                <p>From beloved formulations first created decades ago to personal care necessities.</p>
            </div>
            <div className="prod1Images">
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

export default Products1;
