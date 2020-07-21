import React, { Component } from 'react'
import Image from './assets/images/Hiddenbackground.JPG'

export class HiddenComponent extends Component {
    render() {
        return (
            <div style={hd}>
                <h1> I am the hidden component </h1>
            </div>
        )
    }
}


const hd = {
    backgroundImage: `url(${Image})` 
}

export default HiddenComponent
