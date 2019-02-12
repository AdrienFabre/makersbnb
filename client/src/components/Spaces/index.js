/* eslint-disable react/jsx-filename-extension */
import React from "react";
import ReactDOM from "react-dom";

import styled from "styled-components";

const Hero = props => (
  <div className={props.className}>
    <h2>Book a Space</h2>

    <a href="/spaces/create">List a Space</a>
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
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 8em;
    color: white;
  }

  a {
    display: flex;
    background: palevioletred;
    color: white;
    font-size: 1.4em;
    height: 2.4em;
    margin: 2em 1em 1em;
    padding: 0.8em 1.2em 0em;
    border-radius: 3px;
  }
`;

const Listing = props => (
  <div className={props.className}>
    <h3>{props.title}</h3>
    <p>{props.description}</p>
  </div>
);

const StyledListing = styled(Listing)`
  background-image: url("https://images.unsplash.com/photo-1474874055390-459bc92357f3?ixlib");
  background-color: #cccccc;
  width: 90%;
  margin: 3em 0 3em;
  padding: 3em 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;

  h3 {
    display: flex;
    font-size: 3em;
    color: white;
    align-text: left;
    padding-left: 1em;
    background-color: palevioletred;
    margin: 1em 0em 1em 1em;
  }

  p {
    display: flex;
    font-size: 1em;
    color: white;
    align-text: left;
    padding-left: 3em;
    background-color: palevioletred;
    margin: 1em 0em 1em 3em;
  }
`;

const ListingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3em;
  border: 2px solid palevioletred;
`;

const Spaces = () => (
  <React.Fragment>
    <StyledHero />
    <ListingContainer>
      <StyledListing
        title="A Beautiful Relaxing Place"
        description="A description"
      />
      <StyledListing
        title="Another Beautiful Relaxing Place"
        description="A description"
      />
      <StyledListing
        title="Another Beautiful Relaxing Place"
        description="A description"
      />
    </ListingContainer>
  </React.Fragment>
);

export default Spaces;
