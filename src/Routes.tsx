import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Product from './pages/Product'
import Country from './pages/SingleCountry'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/products/:id" component={Product} />
    <Route exact path="/countries/:id" component={Country} />
  </Switch>
)

export default Routes
