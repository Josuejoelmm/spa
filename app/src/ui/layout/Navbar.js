import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

class Navbar extends Component {
    render() {
        let {links} = this.props
        return (
            
            <div className="navbar">
                <NavLink to="/" exact>
                    <h1 className="jm-logo-container">LOGO</h1>
                </NavLink>
                <nav className="nav-links">
                    {links.map((link,i) => 
                        <NavLink to={`/${link}`} key={i}>{link}</NavLink>
                    )}
                </nav>
            </div>
        )
    }
}

export default connect(
    store => {
        return {
            links: store.links
        }
    },null)(Navbar);