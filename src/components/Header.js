import React, { Component } from 'react'
import './assets/css/Header.css';
import { FiLogIn } from 'react-icons/fi';

export class Header extends Component {
    render() {
        return (
            <div className="big-wrapper" >
                <div className="nav-bar">
                <nav className="links">
                    <div className="menu-items">Shop</div> 
                    <div className="menu-items">Read</div>
                    <div className="menu-items">Store</div> 
                    <div className="menu-items">Branches</div>
                    </nav>
                <aside>Login <FiLogIn/></aside>
                </div>
                <div className="header-body">
                <h1> Aēsop </h1>
                <div className="description">
                <h3>Formulation for skin, hair, home and body</h3>
                <p>Created with sensory pleasure in mind.</p>
                </div>
                </div>
            </div>
        )
    }
}


export default Header
