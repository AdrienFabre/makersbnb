/* eslint-disable react/jsx-filename-extension */
import React from "react";
import ReactDOM from "react-dom";

import styled from "styled-components";

const Hero = props => (
  <div className={props.className}>
    <h2>Book a Space</h2>
  </div>
);

const StyledHero = styled(Hero)`
  background-image: url("https://images.unsplash.com/photo-1533667586627-9f5ddbd42539?ixlib");
  background-color: #cccccc;
  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 8em;
    color: white;
  }
`;

const Listing = props => (
  <div className={props.className}>
    <h3>{props.title}</h3>
    <p>{props.description}</p>
  </div>
);

const Spaces = () => (
  <React.Fragment>
    <StyledHero />
    <Listing title="A Beautiful Relaxing Place" description="A description" />
  </React.Fragment>
);

export default Spaces;
