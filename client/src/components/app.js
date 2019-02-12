/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import '@atlaskit/css-reset'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './Header'
import Spaces from './Spaces'

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Route path="/spaces" render={props => <Spaces />} />
      <Route path="/spaces/create" render={props => <CreateSpace />} />
    </div>
  </BrowserRouter>
)

export default App
