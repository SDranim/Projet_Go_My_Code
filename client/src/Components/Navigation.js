import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar className="nav" bg="light" variant="light">
      <Container>
        <Navbar.Brand style={{ position: "relative", right: "95px" }}>
          WEDDING TO BE
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to='/'>Home</Nav.Link>
          <Nav.Link as={Link} to='/offers'>Offers</Nav.Link>
          <Nav.Link as={Link} to='/sellers'>Sellers</Nav.Link>
        </Nav>
        <Nav.Link style={{ color: "grey" }} as={Link} to='/signIn'>Sign In</Nav.Link>
        <Button variant="outline-dark" as={Link} to='/contact'>Contact Us</Button>
      </Container>
    </Navbar>
  );
}

export default Navigation;
