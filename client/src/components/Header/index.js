/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import styled from 'styled-components'

import Nav from '../Nav'

const Header = props => (
  <div className={props.className}>
    <h1>Makers BnB</h1>
    <Nav />
  </div>
)

const StyledHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
  padding: 20px;

  h1 {
    font-size: 18px;
  }
`

export default StyledHeader
