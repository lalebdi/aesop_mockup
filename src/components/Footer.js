import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer style={styles.footer}>
                Aesop Mockup But Better created by Naomi, Cassie and Leah.
                </footer>
            </div>
        )
    }
}

const styles = { 
    footer:{
        backgroundColor : "#252525",
        color :"#FFFEF3",
        height: "10vh",
        alignItems: "center",
        display: "flex",
        flexDirection: "column"
    }
}

export default Footer
