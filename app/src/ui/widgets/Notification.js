import React, { Component } from 'react'
import {connect} from 'react-redux'

class Notification extends Component {
    render() {
        let {notification,nuevocolor} = this.props
        return (
            <div className={nuevocolor}>{notification.message}</div>
        )
    }
}

export default connect(
    store => ({
        notification: store.notification
    }),
    null
)(Notification)
