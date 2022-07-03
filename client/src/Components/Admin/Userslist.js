import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
  {loading?   
   <div class="center">
   <div class="wave"></div>
   <div class="wave"></div>
   <div class="wave"></div>
   <div class="wave"></div>
   <div class="wave"></div>
   <div class="wave"></div>
   <div class="wave"></div>
   <div class="wave"></div>
   <div class="wave"></div>
   <div class="wave"></div>
 </div>
  : !users.length ? <h2>No Users</h2>: users.map((user,i)=>(< UserCard user={user} key={i}/>)) }
    </div>
  )
}

export default Userslist