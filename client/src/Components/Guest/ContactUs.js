import React, {useState} from "react";
import {Button, Col, Row, Toast } from "react-bootstrap";
import {useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import {sendMsg} from "../../JS/Actions/GuestActions";


function ContactUs() {
  const [message, setMessage] = useState("");
  const [first_name, setFirst_Name] = useState("");
  const [last_name, setLast_Name] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const send = () => {
    dispatch(
      sendMsg(
        {message, first_name, last_name, email, phone_number},
        setEmail(""),
        setFirst_Name(""),
        setLast_Name(""),
        setMessage(""),
        setPhone_number("")
      ),
      setShow(true)
    )
  };

  return (
<div>
<Link to='/'>
    <Button style={{backgroundColor:"#570A57"}} variant="outline-light">Back</Button>
    </Link>
  <div style={{marginLeft:"1020px"}}>
<Row>
      <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong style={{color:"#570A57"}} className="me-auto">Confirmation</strong>
            <small style={{color:"#F582A7"}}>Now</small>
          </Toast.Header>
          <Toast.Body>Woohoo,message sent successfully!</Toast.Body>
        </Toast>
      </Col>
      <Col xs={6}>
      </Col>
    </Row>
    </div>
    <div className="contact-a">
      <small>Enter message and click button "Send"</small>
      <div className="wrapper centered">
        <article className="letter">
          <div className="side">
            <h1 id="h1-a">Contact us</h1>
            <p id="p1">
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                className="txt"
                placeholder="Your message"
                defaultValue={""}
              />
            </p>
          </div>
          <div className="side">
            <p>
              <input
                onChange={(e) => setFirst_Name(e.target.value)}
                value={first_name}
                className="in"
                type="text"
                placeholder="Your first name"
              />
            </p>
            <p>
              <input
                onChange={(e) => setLast_Name(e.target.value)}
                value={last_name}
                className="in"
                type="text"
                placeholder="Your last name"
              />
            </p>
            <p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="in"
                type="email"
                placeholder="Your email"
              />
            </p>
            <p>
              <input
                onChange={(e) => setPhone_number(e.target.value)}
                value={phone_number}
                className="in"
                type="text"
                placeholder="Your phone number "
              />
            </p>
            <p>
              <button className="bttn" onClick={send} id="sendLetter" >
                Send
              </button>
            </p>
          </div>
        </article>
      </div>
    </div>
    </div>
  );
}

export default ContactUs;
