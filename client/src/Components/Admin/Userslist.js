import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { allUsers } from '../../JS/Actions/AdminActions';
import UserCard from './Usercard';

function Userslist() {
  const dispatch = useDispatch();
  useEffect(()=>{
  dispatch(allUsers())
  },[dispatch])
    const users = useSelector((state)=>state.adminReducer.users)
    const loading= useSelector((state)=>state.adminReducer.load)
  return (
<div className='offerlist'>
<Link to='/AdminProfile'>
     <Button style={{backgroundColor:"#570A57"}} variant="outline-light">Back</Button>
     </Link>
  {loading?   
   <div className="center">
   <div className="wave"></div>
   <div className="wave"></div>
   <div className="wave"></div>
   <div className="wave"></div>
   <div className="wave"></div>
   <div className="wave"></div>
   <div className="wave"></div>
   <div className="wave"></div>
   <div className="wave"></div>
   <div className="wave"></div>
 </div>
  : !users.length ? <h2>No Users</h2>: users.map((user,i)=>(< UserCard user={user} key={i}/>)) }
    </div>
  )
}

export default Userslist