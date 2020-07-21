import React from 'react'
import { Spring } from 'react-spring/renderprops';
import Carousel from 'react-elastic-carousel';
import Item from "./Item";
import Item1 from "./assets/images/daily_products/Aesop-Body-A-Rose-By-Any-Other-Name-Body-Cleanser-500mL-large.png"
import Item2 from "./assets/images/daily_products/Aesop-Body-Body-Cleansing-Slab-310g-Carton-Large-1584x962px.png"
import Item3 from "./assets/images/daily_products/Aesop-Body-Geranium-Leaf-Body-Cleanser-500mL-large.png"
import Item4 from "./assets/images/daily_products/Aesop-Body-Geranium-Leaf-Body-Scrub-180mL-large.png"
import Item5 from "./assets/images/daily_products/Aesop-Body-Redemption-Body-Scrub-180mL-large.png"

const breakPoints = [
    {width : 1 , itemsToShow: 1 },
    {width : 550 , itemsToShow: 2 },
    {width : 768 , itemsToShow: 3 },
    {width : 1200 , itemsToShow: 4 }
];


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


export default Products3;