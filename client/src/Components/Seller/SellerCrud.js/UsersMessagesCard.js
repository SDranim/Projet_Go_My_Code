import React from 'react'
import {Button} from "react-bootstrap"
import { useDispatch } from "react-redux";
import {useNavigate } from "react-router-dom";
import { deleteUsermessage } from '../../../JS/Actions/UserActions';

function UsersMessagesCard({message}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDelete = () => {
    dispatch(deleteUsermessage(message._id));
    navigate("/userMsgs");
  };
  return (
    <div className="container">
    <div className="message-blue">
      <h6>First_name : {message.first_name}</h6>
      <h6>Last_name : {message.last_name}</h6>
      <h6>Email : {message.email}</h6>
      <h6>Phone Number : {message.phone_number}</h6>
      <p className="message-content">Message : {message.message}</p>
      <Button onClick={handleDelete} variant="outline-light">Delete</Button>
      
    </div>
  </div>
  )
}

export default UsersMessagesCard