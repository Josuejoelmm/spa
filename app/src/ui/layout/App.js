import React, { Component, Fragment } from 'react'
import Navbar from './Navbar'
import Main from './Main'
import Footer from './Footer'
import './App.css'

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                <Main />
                <Footer />
            </Fragment>
        )
    }
}
