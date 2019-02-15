/* eslint-disable react/jsx-filename-extension */
import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import StyledPageContainer from "../PageContainer";
import StyledForm from "../Form";

const SignUpInputs = props => (
  <div className={props.className}>
    <h3> Sign up to Makers BnB </h3>
    <form action="">
      <label>Email:</label>
      <input type="email" name="email" />
      <label>Password:</label>
      <input type="password" name="password" />
      <label>Password Confirmation:</label>
      <input type="password" name="passwordConfirm" />
      <input type="submit" value="Submit" />
    </form>
  </div>
);

const SignUp = () => (
  <React.Fragment>
    <StyledPageContainer>
      <StyledForm>
        <SignUpInputs />
      </StyledForm>
    </StyledPageContainer>
  </React.Fragment>
);
export default SignUp;
