/* eslint-disable react/jsx-filename-extension */
import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import SignUp from '../SignUp';

const PageTitle = props => (
    <div className={props.className}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
  
  const StyledPageTitle = styled(PageTitle)`
    background-image: url("https://images.unsplash.com/photo-1520732713659-8f14034ba7d6?ixlib");
    background-color: #cccccc;
    height: 500px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  
    h2 {
      font-size: 5em;
      color: white;
    }
  
    p {
      color: white;
      font-size: 1.4em;
      margin: 2em 1em 1em;
    }
  `;

const Welcome = () => (
    <React.Fragment>
        <StyledPageTitle title="Feel at home, anywhere" />
        <SignUp/>
    </React.Fragment>
  );
  export default Welcome;