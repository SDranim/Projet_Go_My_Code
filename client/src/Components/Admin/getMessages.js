import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allmessages } from '../../JS/Actions/AdminActions'
import MessagesCard from "./MessagesCard"
function GetMessages() {
  const load = useSelector((state)=>state.adminReducer.load)
  const messages = useSelector((state)=>state.adminReducer.messages)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(allmessages());
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
   :messages.map((message,i)=>(< MessagesCard message={message} key={i}/>))
    }
      </div>
  )
}

export default GetMessages