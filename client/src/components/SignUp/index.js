/* eslint-disable react/jsx-filename-extension */
import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const PageContainer = styled.div`
  max-width: 600px;
  padding: 20px;
  margin: 0 auto;
`;

const SignUpForm = props => (
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

const StyledSignUpForm = styled(SignUpForm)`
  label {
    font-size: 14px;
    display: block;
    margin-bottom: 10px;
    font-weight: 500;
  }

  input,
  textarea {
    padding: 10px;
    box-sizing: border-box;
    display: block;
    width: 100%;
    font-size: 16px;
    margin-bottom: 20px;
    border: 2px solid #cccacb;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }

  input:focus,
  textarea:focus {
    border: 2px solid palevioletred;
    outline: none;
  }

  input[type="submit"] {
    background-color: palevioletred;
    border: 2px solid palevioletred;
    color: white;
    border-radius: 7px;
    width: 100%;
  }

  input[type='submit']:hover {
    background-color: #b74b6e;
    border: 2px solid #b74b6e;
    color: white;
    width: 100%;
    border-radius: 7px;
    cursor: pointer;
  
  }

  h3 {
    font-size: 2em;
    color: #172B4D;
    text-align: center;
    padding: 2em 0 2em 0;
  }
`;


const SignUp = () => (
    <React.Fragment>
      <PageContainer>
        <StyledSignUpForm />
      </PageContainer>
    </React.Fragment>
  );
  export default SignUp;


  