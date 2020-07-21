import React, { Component } from 'react'
import Image from './assets/images/Hiddenbackground.JPG'

export class HiddenComponent extends Component {
    render() {
        return (
            <div style={hd}>
                
            </div>
        )
    }
}


const hd = {
    backgroundImage: `url(${Image})` ,
    height: "75vh"
}

export default HiddenComponent
