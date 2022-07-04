import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteUser } from '../../JS/Actions/AdminActions';

function UserCard({user}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handledelete= () => {
    dispatch(deleteUser(user._id));
    navigate("/users");
  };
  return (
<div className="a-box">
     <div className="img-container">
       <div className="img-inner">
         <div className="inner-skew">
           <img src={`Image/${user.photo}`} alt="" />
         </div>
       </div>
     </div>
     <div className="text-container">
       <h3>{user?.first_name}</h3>
       <div>
     
      <Button onClick={handledelete} style={{backgroundColor:" #C9BBCF",color: "#46244C"}}  variant="outline-light">Delete User</Button>

       </div>
     </div>
   </div>
  )
}

export default UserCard