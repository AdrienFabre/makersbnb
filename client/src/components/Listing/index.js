/* eslint-disable react/jsx-filename-extension */
import React from "react";
import styled from "styled-components";

const Listing = props => (
  <div className={props.className}>
    <h4>{props.title}</h4>
    <p>{props.description}</p>
  </div>
);

const StyledListing = styled(Listing)`
  background-image: url("https://images.unsplash.com/photo-1474874055390-459bc92357f3?ixlib");
  background-color: #cccccc;
  margin-top: 6em;
  padding: 2em 0 2em 6em;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;

  h4 {
    display: flex;
    font-size: 3em;
    color: white;
    align-text: left;
    padding: 0.5em 1em;
    background-color: #f3bdcf;
    margin: 1em 0em 1em 1em;
  }

  p {
    display: flex;
    font-size: 1em;
    color: white;
    align-text: left;
    padding: 0.5em 3em;
    background-color: #f3bdcf;
    margin: 1em 0em 1em 3em;
  }
`;

export default StyledListing;
