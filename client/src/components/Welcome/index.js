/* eslint-disable react/jsx-filename-extension */
import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import PageHero from "../PageHero";
import StyledPageContainer from "../PageContainer";
import SignUp from "../SignUp";

const Welcome = () => (
  <React.Fragment>
    <PageHero
      title="Feel at home, anywhere"
      description="A description"
      image="https://images.unsplash.com/photo-1520732713659-8f14034ba7d6?ixlib"
    />
    <StyledPageContainer>
      <SignUp />
    </StyledPageContainer>
  </React.Fragment>
);
export default Welcome;
