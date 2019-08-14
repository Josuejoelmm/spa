import React, { Component, Fragment } from 'react'
import Notification from './../widgets/Notification'

export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <h1>Hooooome</h1>
                <Notification nuevocolor='rojo' />
            </Fragment>
        )
    }
}
