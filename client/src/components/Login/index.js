/* eslint-disable react/jsx-filename-extension */
import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import StyledPageContainer from "../PageContainer";
import StyledForm from "../Form";

const LoginInputs = props => (
  <div className={props.className}>
    <h3> Log in to Makers BnB </h3>
    <form action="">
      <label>Email:</label>
      <input type="email" name="email" />
      <label>Password:</label>
      <input type="password" name="password" />
      <input type="submit" value="Submit" />
    </form>
  </div>
);

const Login = () => (
  <React.Fragment>
    <StyledPageContainer>
      <StyledForm>
        <LoginInputs />
      </StyledForm>
    </StyledPageContainer>
  </React.Fragment>
);

export default Login;
