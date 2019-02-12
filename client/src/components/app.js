/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import '@atlaskit/css-reset'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './Header'
import Spaces from './Spaces'
import CreateSpace from './CreateSpace'

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Route exact={true} path="/spaces" render={props => <Spaces />} />
      <Route
        exact={true}
        path="/spaces/create"
        render={props => <CreateSpace />}
      />
    </div>
  </BrowserRouter>
)

export default App
