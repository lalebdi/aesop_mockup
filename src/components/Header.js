import React, { Component } from 'react'
import { Spring } from 'react-spring/renderprops';
import './assets/css/Header.css';
import { FiLogIn } from 'react-icons/fi';


export class Header extends Component {
    render() {
        return (
            <Spring
            from = {{ opacity : 0 , marginTop: -500 }}
            to = {{ opacity : 1 , marginTop : 0}}
            >
                { props => (
                    <div style = {props}>
                <div className="big-wrapper" >
                <div className="nav-bar">
                <nav className="links">
                    <div className="menu-items">Shop</div> 
                    <div className="menu-items">Read</div>
                    <div className="menu-items">Store</div> 
                    <div className="menu-items">Branches</div>
                    </nav>
                <button className= "login">Login <FiLogIn/></button>
                </div>
                <div className="header-body">
                <h1> Aēsop </h1>
                <div className="description1">
                <h3>Formulation for skin, hair, home and body</h3>
                <p>Created with sensory pleasure in mind.</p>
                </div>
                </div>
            </div>
                    </div>
                )}
            </Spring>
            
        )
    }
}


export default Header
