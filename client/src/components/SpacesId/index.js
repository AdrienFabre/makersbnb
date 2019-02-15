/* eslint-disable react/jsx-filename-extension */
import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import PageHero from "../PageHero";
import StyledPageContainer from "../PageContainer";
import StyledForm from "../Form";

import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController
} from "react-dates";

const RequestInputs = props => (
  <div className={props.className}>
    <form action="">
      <label>Dates:</label>
      <input type="text" name="dates" />
      <input type="submit" value="Request to Book" />
    </form>
  </div>
);

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
    <PageHero
      title="A Beautiful Relaxing Space"
      description="A description, description, description, description, description."
      image="https://images.unsplash.com/photo-1474874055390-459bc92357f3?ixlib"
    />
    <StyledPageContainer>
      {/* <Calender /> */}
      <StyledForm>
        <RequestInputs />
      </StyledForm>
    </StyledPageContainer>
  </React.Fragment>
);

export default SpacesID;
