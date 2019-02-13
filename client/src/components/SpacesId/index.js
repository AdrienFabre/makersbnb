/* eslint-disable react/jsx-filename-extension */
import React from "react";
import ReactDOM from "react-dom";

import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController
} from "react-dates";

import styled from "styled-components";

const PageContainer = styled.div`
  max-width: 600px;
  padding: 20px;
  margin: 0 auto;
`;

const SpaceHero = props => (
  <div className={props.className}>
    <h2>{props.title}</h2>
    <p>{props.description}</p>
  </div>
);

const StyledSpaceHero = styled(SpaceHero)`
  background-image: url("https://images.unsplash.com/photo-1474874055390-459bc92357f3?ixlib");
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

const RequestForm = props => (
  <div className={props.className}>
    <form action="">
      <label>Dates:</label>
      <input type="text" name="dates" />
      <input type="submit" value="Request to Book" />
    </form>
  </div>
);

const StyledRequestForm = styled(RequestForm)`
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
    border-radius: 7px;
    width: 100%;
  }

  input[type="submit"]:hover {
    background-color: #b74b6e;
    border: 2px solid #b74b6e;
    color: white;
    width: 100%;
    border-radius: 7px;
    cursor: pointer;
  }
`;

const Calender = props => (
  <div className={props.className}>
    <DateRangePicker
      startDateId="MyDatePicker"
      startDate={props.startDate} // momentPropTypes.momentObj or null,
      startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
      endDate={props.endDate} // momentPropTypes.momentObj or null,
      endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
      onDatesChange={({ startDate, endDate }) =>
        this.setState({ startDate, endDate })
      } // PropTypes.func.isRequired,
      focusedInput={props.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
      onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
    />
  </div>
);

const SpacesID = () => (
  <React.Fragment>
    <StyledSpaceHero
      title="A Beautiful Relaxing Space"
      description="A description, description, description, description, description."
    />
    <PageContainer>
      <Calender />
      <StyledRequestForm />
    </PageContainer>
  </React.Fragment>
);

export default SpacesID;
