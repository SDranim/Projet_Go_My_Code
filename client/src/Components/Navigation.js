import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../JS/Actions/UserActions";


function Navigation() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const auth= useSelector((state)=>state.authReducer.auth)
  return (
    <Navbar className="nav" bg="light" variant="light">
      <Container>
        <Navbar.Brand style={{ position: "relative", right: "95px" }}>
          WEDDING TO BE
        </Navbar.Brand>
              <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/offers">
            Offers
          </Nav.Link>
          <Nav.Link as={Link} to="/sellers">
            Sellers
          </Nav.Link>
        </Nav>
     {
      auth ?   <Button variant="outline-dark" onClick={()=>{dispatch(logout(),navigate('/SignIn'))}}>
      LOGOUT
    </Button>:<>
         <Nav.Link style={{ color: "grey" }} as={Link} to="/signUp">
          Sign Up
        </Nav.Link>
        <Nav.Link style={{ color: "grey" }} as={Link} to="/signIn">
          Sign In
        </Nav.Link>
      </>
     }
        <Button variant="outline-dark" as={Link} to="/contact">
          Contact Us
        </Button>
      
      </Container> 
    </Navbar>
  );
}

export default Navigation;
