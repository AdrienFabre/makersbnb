/* eslint-disable react/jsx-filename-extension */
import React from "react";
import styled from "styled-components";

const PageHero = props => (
  <div className={props.className}>
    <h2>{props.title}</h2>
    <p>{props.description}</p>
  </div>
);

const StyledPageHero = styled(PageHero)`
  background-image: url(${props => props.image});
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

  p {
    color: white;
    font-size: 1.4em;
    margin: 2em 1em 1em;
  }
`;

export default StyledPageHero;
