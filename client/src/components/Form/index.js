/* eslint-disable react/jsx-filename-extension */
import React from "react";
import styled from "styled-components";

const StyledForm = styled.div`
  form {
    padding-top: 6em;
  }

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
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
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
    width: 100%;
  }

  input[type="submit"]:hover {
    background-color: #b74b6e;
    border: 2px solid #b74b6e;
    color: white;
    width: 100%;
    cursor: pointer;
  }
`;

export default StyledForm;
