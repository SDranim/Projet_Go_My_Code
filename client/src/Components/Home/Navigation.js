import {Navbar, Nav, Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {logout} from "../../JS/Actions/AuthUserActions";
import {allOffers, allSellers} from "../../JS/Actions/GuestActions";
import {BiHomeHeart} from "react-icons/bi";

function Navigation() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {auth, user} = useSelector((state) => state.authReducer);

  const offers = () => {
    dispatch(allOffers());
    navigate("/allOffers");
  };
  const sellers = () => {
    dispatch(allSellers());
    navigate("/SellersList");
  };
  return (
    <div>
      <Navbar className="nav">
        <Navbar.Brand id="color_n">WEDDING TO BE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link id="color_h" as={Link} to="/">
              <BiHomeHeart size={24} />
            </Nav.Link>
            <Nav.Link id="color" onClick={offers}>
              Offers
            </Nav.Link>
            <Nav.Link id="color" onClick={sellers}>
              Sellers
            </Nav.Link>
            {auth ? (
              <>
                <Nav.Link
                 id="color_i"
                 style={{marginLeft: "700px"}}
                  as={Link}
                  to={
                    user.role === "seller"
                      ? "/profileSeller"
                      : user.role === "admin"
                      ? "/AdminProfile"
                      : "/profileUser"
                  }
                >
                  Profile
                </Nav.Link>
                <Button
                variant="light"
                 id="nav_btn"
                  onClick={() => {
                    dispatch(logout(), navigate("/SignIn"));
                  }}
                >
                  LOGOUT
                </Button>{" "}
              </>
            ) : (
              <>
                 <Nav.Link id="nav_r"  as={Link} to="/signIn">
                  SignIn
                </Nav.Link>
                <Nav.Link  id="color_i" as={Link} to="/signUp">
                  SignUp
                </Nav.Link>
             
              </>
            )}
            <Button id="nav_btn" variant="light" as={Link} to="/contact">
              Contact Us
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
