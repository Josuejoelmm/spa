import React, { Component } from 'react'

const Notificacion = (props) => {
    return (
        <div className={`notification-class ${props.className ? props.className : ''}`} >Notificacioooon</div>
    );
}

export default class Notif extends Component {
    constructor() {
        super();
        this.state = {
            shouldRenderNotification : false
        }
        this.openNotification = this.openNotification.bind(this)
        
    }
    openNotification() {

        this.setState({
            shouldRenderNotification: true
        })
    }
    componentWillUnmount() {
        if (this.notificationTimeout) {
            clearTimeout(this.notificationTimeout)
        }
    }
    renderNotification() {
        
        if (this.state.shouldRenderNotification) {
        console.log('renderNotif');

            this.notificationTimeout = window.setTimeout(function() {
                this.setState({
                    shouldRenderNotification: false
                });
            }.bind(this), this.props.hideIn ? this.props.hideIn : 3000);
            return (
                <Notificacion 
                    className="testing-class"
                />
            )
        }
    }

    render() {
        return (
            <div className="notification-container">
                <button onClick={this.openNotification} >Boton para mostrar la notificacion</button>
            </div>
        )
    }
}
