import React, { Component, Fragment } from 'react'
// import Notification from './../widgets/Notification'
// import Notif from '../widgets/Notif'
import Aviso from '../widgets/Aviso'
import Formulario from '../widgets/Formulario'
// import SwipeableViews from 'react-swipeable-views';
// import { AppBar, Tabs, Tab } from '@material-ui/core'



export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <h1>HOME</h1>
                {/* Componente Aviso: Autoclose por defecto 3sg, para cambiar pasar
                 por props 'tiempo' espresada en milisegundos ejemplo: tiempo={9000}
                 para el color del background background */}
                <Aviso mensaje="warning" tiempo={1000} />
                <Formulario />
            </Fragment>
        )
    }
}
