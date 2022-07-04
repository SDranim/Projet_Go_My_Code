import React from 'react'
import {Button} from "react-bootstrap"
import { useDispatch } from "react-redux";
import {useNavigate } from "react-router-dom";
import {deletemessage} from "../../JS/Actions/AdminActions"
function MessagesCard({message}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDelete = () => {
    dispatch(deletemessage(message._id));
    navigate("/messages");
  };
  return (
    <div className="container">
    <div className="message-blue">
      <h6>{message.first_name}</h6>
      <h6>{message.last_name}</h6>
      <h6>{message.email}</h6>
      <h6>{message.phone}</h6>
      <p className="message-content">{message.message}</p>
      <Button onClick={handleDelete}  variant="outline-light">Delete</Button>
      
    </div>
  </div>
  )
}

export default MessagesCard