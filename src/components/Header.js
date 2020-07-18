import React, { Component } from 'react'
import './assets/css/Header.css';

export class Header extends Component {
    render() {
        return (
            <div className="big-wrapper" >
                <div className="nav-bar">
                <nav>Shop - Read - Store - Branches</nav>
                <aside>Login</aside>
                </div>
                <div className="header-body">
                <h1> Aesop </h1>
                <div className="description">
                <h3>Formulation for skin, hair, home and body</h3>
                <p>Createdc with sensory pleasure in mind.</p>
                </div>
                </div>
            </div>
        )
    }
}

export default Header
