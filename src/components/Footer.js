import React, { Component } from 'react'
import { Spring } from 'react-spring/renderprops'

export class Footer extends Component {
    render() {
        return (
            <Spring
            from = {{ opacity : 0 , marginTop : -500}}
            to = {{ opacity : 1 , marginTop : 0}}
            config = {{ delay : 3000 , duration : 3000}}>
                { props => (
                    <div style = { props }>
                            <div>
                                <footer style={styles.footer}>
                                    Aesop Mockup But Better created by Naomi, Cassie and Leah.
                                </footer>
                            </div>

                    </div>
                )}
            </Spring>
            
        )
    }
}

const styles = { 
    footer:{
        backgroundColor : "#252525",
        color :"#FFFEF3",
        height: "9vh",
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        paddingLeft: "5vw"
    }
}

export default Footer


/*
This is for the top bar:
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

*/