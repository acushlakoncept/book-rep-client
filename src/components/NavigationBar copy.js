import React from "react";
import { Navbar, Nav} from 'react-bootstrap';
import { HashRouter, NavLink } from 'react-router-dom';

export function NavigationBar(props) {
  return (
    <HashRouter>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Auth App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </Nav>

          <NavLink className="nav-link" to="/login">login</NavLink>
          <NavLink className="nav-link" to="/register">register</NavLink>
      </Navbar.Collapse>
    </Navbar>
   </HashRouter>
  );
}

export default NavigationBar;
