import React, { Component } from 'react'

export class TopBar extends Component {
    render() {
        return (
            <div className="top-bar" style={styles.div}>
                <p>Top Bar here</p>
            </div>
        )
    }
}

const styles = { 
    div:{
        backgroundColor : "#252525",
        color :"#FFFEF3",
        height: "10vh",
        alignItems: "center",
        display: "flex",
        flexDirection: "column"
    }
}

export default TopBar
