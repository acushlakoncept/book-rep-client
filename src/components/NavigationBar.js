import React from "react";
import { Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function NavigationBar(props) {
  return (
  
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Auth App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-link" to={"/"}>Home</Link>
        </Nav>

          <Link className="nav-link" to={"/login"}>login</Link>
          <Link className="nav-link" to={"/register"}>register</Link>
      </Navbar.Collapse>
    </Navbar>
  
  );
}

export default NavigationBar;
