/* eslint-disable react/jsx-filename-extension */

import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import PageHero from "../PageHero";
import StyledPageContainer from "../PageContainer";
import StyledListingContainer from "../ListingContainer";
import StyledListing from "../Listing";

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
    font-size: 7em;
    color: white;
    text-align: center;
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

  @media only screen and (max-width: 600px) {
    h2 {
      font-size: 4em;
      padding: 20px;
    }
  }
`;

class Spaces extends React.Component {
  state = { spaces: null };

  componentWillMount() {
    fetch("http://localhost:3000/api/spaces")
      .then(response => response.json())
      .then(json => {
        const spaces = json;
        this.setState({ spaces });
      });
  }

  render() {
    return (
      <React.Fragment>
        <StyledHero />
        <StyledPageContainer>
          <StyledListingContainer>
            {this.state.spaces &&
              this.state.spaces.map((space, index) => {
                return (
                  <StyledListing
                    key={index}
                    title={space.name}
                    description={space.description}
                  />
                );
              })}
          </StyledListingContainer>
        </StyledPageContainer>
      </React.Fragment>
    );
  }
}

export default Spaces;
