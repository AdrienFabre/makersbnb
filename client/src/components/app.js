/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './Header'
import Spaces from './Spaces'

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Route path="/spaces" render={props => <Spaces />} />
    </div>
  </BrowserRouter>
)

export default App
