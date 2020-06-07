import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import logo from '../images/logo.png';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img alt="" src={logo} className="logo" />
          TodoApp
        </Navbar.Brand>
      </Navbar>
    );
  }
}
