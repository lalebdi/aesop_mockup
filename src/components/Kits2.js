import React from 'react'
import { Spring } from 'react-spring/renderprops'
import Item1 from "./assets/images/gift_image.jpg"

class Kits2 extends React.Component {
    render() {
        return (
            <Spring 
            from={{opacity: 0, marginTop: -500}} 
            to = {{opacity: 1, marginTop: 0}}>
                {props => (
                    <div style={props}>
            <body>
            <div className="kits2">
                <div className="kits2Description">
                    <h3>An odyssey of gifts, for generous and inspired giving</h3>
                    <p>Seasonal Gift Kits</p>
                    <p>Aseop favorites</p>
                    <p>Small gestures</p>
                    <p>Generous offerings</p>
                    <p>Fragrant formulations</p>
                    <p>Treats for self</p>
                    <p>All gifts</p>
                </div>
                <div className="kits2Images">
                    <img className="kits2Img" src={Item1}></img>
                </div>
            </div>
            </body>
            </div>
            )}
            </Spring>
        )
    }
}


export default Kits2;