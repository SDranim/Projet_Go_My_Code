import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allUsersmessages } from '../../../JS/Actions/UserActions'
import UsersMessagesCard from './UsersMessagesCard'
function GetUsersMessages() {
  const load = useSelector((state)=>state.authReducer.load)
  const messages = useSelector((state)=>state.authReducer.messages)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(allUsersmessages());
    },[dispatch])
  return (
  
    <div className='offerlist'>
    {load?   
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
   :messages.map((message,i)=>(< UsersMessagesCard message={message} key={i}/>))
    }
      </div>
  )
}

export default GetUsersMessages