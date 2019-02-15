/* eslint-disable react/jsx-filename-extension */
import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import PageHero from "../PageHero";
import StyledPageContainer from "../PageContainer";
import StyledForm from "../Form";

const CreateInputs = props => (
  <div className={props.className}>
    <form action="">
      <label>Name:</label>
      <input type="text" name="name" id="name_input" />
      <label>Description:</label>
      <textarea name="description" id="" cols="30" rows="10" />
      <label>Price Per Night:</label>
      <input type="number" name="price-per-night" />
      <label>Available From:</label>
      <input type="date" name="start-date" />
      <label>Available Until:</label>
      <input type="date" name="end-date" />
      <input type="submit" value="Submit" />
    </form>
  </div>
);

const StyledCreateInputs = styled(CreateInputs)``;

// const CreateSpace = () => (
//   <React.Fragment>
//     <PageHero
//       title="List a Space"
//       description="A description"
//       image="https://images.unsplash.com/photo-1495954484750-af469f2f9be5?ixlib"
//     />

//     <StyledPageContainer>
//       <StyledForm>
//         <StyledCreateInputs />
//       </StyledForm>
//     </StyledPageContainer>
//   </React.Fragment>
// );

class CreateSpace extends React.Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <PageHero
          title="List a Space"
          description="A description"
          image="https://images.unsplash.com/photo-1495954484750-af469f2f9be5?ixlib"
        />

        <StyledPageContainer>
          <StyledForm>
            <StyledCreateInputs />
          </StyledForm>
        </StyledPageContainer>
      </React.Fragment>
    );
  }
}

export default CreateSpace;

const ListingContainer = styled.div``;
