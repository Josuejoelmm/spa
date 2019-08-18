import React, { Component, Fragment } from 'react'
import Notificacion from '../widgets/Notificacion'

export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <h1>HOME</h1>
                {/* Componente Aviso: Autoclose por defecto 3sg y un mensaje "Se realizo con exito !"
                para cambiar pasar por props 'tiempo' espresada en milisegundos ejemplo: tiempo={9000}
                 y mensaje="Nuevo mensaje" */}
                <Notificacion mensaje="Nuevo mensaje" tiempo={1000} />
            </Fragment>
        )
    }
}
