/* eslint-disable react/jsx-filename-extension */
import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Nav = props => (
  <nav className={props.className}>
    <ul>
      <li>
        <a href="/spaces">Spaces</a>
      </li>
    </ul>
  </nav>
);

const StyledNav = styled(Nav)`
  justify-content: flex-end;
  ul {
    list-style: none;
  }

  ul li a {
    text-decoration: none;
    color: inherit;
  }
`;

export default StyledNav;
