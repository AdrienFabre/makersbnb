/* eslint-disable react/jsx-filename-extension */
import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import PageHero from "../PageHero";
import StyledPageContainer from "../PageContainer";
import StyledForm from "../Form";

class CreateInputs extends React.Component {
  state = {
    nameInput: "",
    descriptionInput: "",
    priceInput: "",
    startDateInput: "",
    endDateInput: ""
  };

  handleNameChange = event => {
    this.setState({ nameInput: event.target.value });
  };

  handleDescriptionChange = event => {
    this.setState({ descriptionInput: event.target.value });
  };

  handlePriceChange = event => {
    this.setState({ priceInput: event.target.value });
  };

  handleStartDateChange = event => {
    this.setState({ startDateInput: event.target.value });
  };

  handleEndDateChange = event => {
    this.setState({ endDateInput: event.target.value });
  };
  handleSubmit = event => {
    alert(
      "name: " +
        this.state.nameInput +
        " description: " +
        this.state.descriptionInput +
        " price: " +
        this.state.priceInput +
        " startDate: " +
        this.state.startDateInput +
        " endDate: " +
        this.state.endDateInput
    );
    event.preventDefault();
  };

  render() {
    return (
      <div className={this.props.className}>
        <form action="" onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            id="name_input"
            onChange={this.handleNameChange}
            value={this.state.nameInput}
          />
          <label>Description:</label>
          <textarea
            name="description"
            id=""
            cols="30"
            rows="10"
            onChange={this.handleDescriptionChange}
            value={this.state.descriptionInput}
          />
          <label>Price Per Night:</label>
          <input
            type="number"
            name="price-per-night"
            onChange={this.handlePriceChange}
            value={this.state.priceInput}
          />
          <label>Available From:</label>
          <input
            type="date"
            name="start-date"
            onChange={this.handleStartDateChange}
            value={this.state.startDateInput}
          />
          <label>Available Until:</label>
          <input
            type="date"
            name="end-date"
            onChange={this.handleEndDateChange}
            value={this.state.endDateInput}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

const StyledCreateInputs = styled(CreateInputs)``;

class CreateSpace extends React.Component {
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
