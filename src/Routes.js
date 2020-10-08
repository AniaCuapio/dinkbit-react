import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './screens/Home'
import ContactForm from './screens/ContactForm'
import Detail from './screens/Detail'

// TAREA 1: hacer proyecto desde cero --> agregar 5 rutas --> crear container y displays

export default function Routes(){
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Contact" component={ContactForm} />
            <Route path="/Detail" component={Detail} />
        </Switch>
    )
}

