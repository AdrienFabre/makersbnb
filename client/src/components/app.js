/* eslint-disable react/jsx-filename-extension */
import React from "react";
import "@atlaskit/css-reset";
import { BrowserRouter, Route } from "react-router-dom";

// core react-dates imports
import "react-dates/initialize";
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController
} from "react-dates";
import "react-dates/lib/css/_datepicker.css";

import Header from "./Header";
import Welcome from "./Welcome";
import Spaces from "./Spaces";
import CreateSpace from "./CreateSpace";
import Login from "./Login";
import SpacesId from "./SpacesId";

const App = () => (
  <BrowserRouter>
    <div>
      <Header />

      <Route exact={true} path="/" render={props => <Welcome />} />
      <Route exact={true} path="/spaces" render={props => <Spaces />} />
      <Route exact={true} path="/spaces/id" render={props => <SpacesId />} />
      <Route exact={true} path="/login" render={props => <Login />} />
      <Route
        exact={true}
        path="/spaces/create"
        render={props => <CreateSpace />}
      />
    </div>
  </BrowserRouter>
);

export default App;
