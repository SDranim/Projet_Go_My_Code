import { Navbar, Nav, Container, Button} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../JS/Actions/AuthUserActions";
import { allOffers, allSellers } from "../JS/Actions/GuestActions";


function Navigation() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const {auth,user}= useSelector((state)=>state.authReducer)
 

  const offers=()=>{
    dispatch(allOffers())
    navigate('/allOffers')
  }
  const sellers=()=>{
    dispatch(allSellers())
    navigate('/SellersList')
  }
  return (

<div>
<Navbar className="nav" bg="light" expand="lg">
  <Container>
    <Navbar.Brand>WEDDING TO BE</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link onClick={offers}>
            Offers
          </Nav.Link>
          <Nav.Link onClick={sellers}>
            Sellers
          </Nav.Link>
     {
      auth ?  <>
      <Nav.Link   as={Link} to={user.role==="seller" ? "/profileSeller": user.role==="admin"? "/AdminProfile":"/profileUser"} >
            Profile
          </Nav.Link>
       <Button  variant="outline-dark" onClick={()=>{dispatch(logout(),navigate('/SignIn'))}}>
      LOGOUT
    </Button> </>:<>
         <Nav.Link style={{ color: "grey" }} as={Link} to="/signUp">
          Sign Up
        </Nav.Link>
        <Nav.Link style={{ color: "grey" }} as={Link} to="/signIn">
          Sign In
        </Nav.Link>
      </>
     }
        <Button  variant="outline-dark" as={Link} to="/contact">
          Contact Us
        </Button>
      
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
  );
}

export default Navigation;
