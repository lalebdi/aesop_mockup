import React, { Component } from 'react'

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
    background : "skyblue",
    color : "white"
}

export default HiddenComponent
