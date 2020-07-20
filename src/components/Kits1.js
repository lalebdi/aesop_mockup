import React from 'react'
import { Spring } from 'react-spring/renderprops'
import Item1 from "./assets/images/Aesop-Gift-Kits-2019-20-Hybris-Range-Page-Secondary-Mid-Desktop-1690x945px.png"

class Kits1 extends React.Component {
    render() {
        return (
            <Spring 
            from={{opacity: 0, marginTop: -500}} 
            to = {{opacity: 1, marginTop: 0}}>
                {props => (
                    <div style={props}>
            <body>
            <div className="kits1">
                <div className="kits1Description">
                    <h3>Five mythical Gifts Kits</h3>
                    <p>Crafted for goods, mortals, and musses alike, our new Gift Kit collection makes for an inspired gift giving this festive season.</p>
                    <button>Explore seasonal Gift Kits</button>
                </div>
                <div className="kits1Image">
                    <img className="kitImg" src={Item1}></img>
                </div>
                
            </div>
            </body>
            </div>
            )}
            </Spring>
        )
    }
}

export default Kits1;