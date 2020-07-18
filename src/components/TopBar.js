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
        backgroundColor : "black",
        color :"white"
    }
}

export default TopBar
