import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import {Link} from "react-router-dom"
const Navigation = () => {
  const style = "nounderline text-decoration-none text-white mx-2";
  return (
    <Navbar bg="dark"  variant="dark"  fixed="top" expand="md" >
    <Container>
      <Navbar.Brand href="/"  className="font-bold font-serif">LMS</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link to="/" className={style}>
            Home
          </Link>
          <Link to="/About" className={style}>
            About
          </Link>
          <Nav.Item >
          <Link to="/login"  className={style}>
            Sign in
          </Link>
          </Nav.Item>
        
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Navigation;
