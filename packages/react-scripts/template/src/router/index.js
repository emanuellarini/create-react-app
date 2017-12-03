import React from 'react'
import Switch from 'react-router/Switch'
import Route from 'react-router/Route'
import routes from './routes'

export default () => <Switch>{ routes.map(route => (<Route {...route} />)) }</Switch>
