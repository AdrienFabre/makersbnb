/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const PageTitle = props => (
  <div className={props.className}>
    <h2>{props.title}</h2>
    <p>{props.description}</p>
  </div>
)

const StyledPageTitle = styled(PageTitle)``

const CreateSpace = () => (
  <React.Fragment>
    <StyledPageTitle title="List a Space" description="A description" />
  </React.Fragment>
)

export default CreateSpace
