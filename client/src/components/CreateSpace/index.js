/* eslint-disable react/jsx-filename-extension */
import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const PageContainer = styled.div`
  max-width: 600px;
  padding: 20px;
  margin: 0 auto;
`;

const PageTitle = props => (
  <div className={props.className}>
    <h2>{props.title}</h2>
    <p>{props.description}</p>
  </div>
);

const StyledPageTitle = styled(PageTitle)`
  background-image: url("https://images.unsplash.com/photo-1495954484750-af469f2f9be5?ixlib");
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

const Form = props => (
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

const StyledForm = styled(Form)`
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
    border: 1px solid #f4f5f7;
  }

  input[type="submit"] {
    background-color: palevioletred;
    color: white;
    width: 100%;
  }
`;

const CreateSpace = () => (
  <React.Fragment>
    <StyledPageTitle title="List a Space" description="A description" />
    <PageContainer>
      <StyledForm />
    </PageContainer>
  </React.Fragment>
);
export default CreateSpace;

const ListingContainer = styled.div``;
