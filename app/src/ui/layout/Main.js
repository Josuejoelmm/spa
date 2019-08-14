import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './../pages/Home'
import Productos from './../pages/Productos'
import Nutricion from './../pages/Nutricion'
import Contacto from './../pages/Contacto'

export default class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/productos" component={Productos} />
                    <Route path="/nutricion" component={Nutricion} />
                    <Route path="/contacto" component={Contacto} />
                </Switch>
            </main>
        )
    }
}
