/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const PageContainer = styled.div`
  max-width: 600px;
  padding: 20px;
  margin: 0 auto;
`

const PageTitle = props => (
  <div className={props.className}>
    <h2>{props.title}</h2>
    <p>{props.description}</p>
  </div>
)

const StyledPageTitle = styled(PageTitle)``

const Form = props => (
  <div className={props.className}>
    <form action="">
      <label>Name:</label>
      <input type="text" name="name" />
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
)

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
    border: 2px solid #cccacb;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }

  input:focus,
  textarea:focus {
    border: 2px solid palevioletred;
    outline: none;
  }


  input[type='submit'] {
    background-color: palevioletred;
    border: 2px solid palevioletred;
    color: white;
    border-radius: 7px;
    width: 100%;
  }

  input[type='submit']:hover {
    background-color: #b74b6e;
    border: 2px solid #b74b6e;
    color: white;
    width: 100%;
    border-radius: 7px;
    cursor: pointer;
  
  }
`

const CreateSpace = () => (
  <React.Fragment>
    <StyledPageTitle title="List a Space" description="A description" />
    <PageContainer>
      <StyledForm />
    </PageContainer>
  </React.Fragment>
)
export default CreateSpace

const ListingContainer = styled.div``
