import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
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
        <Link to='/AdminProfile'>
     <Button style={{backgroundColor:"#570A57"}} variant="outline-light">Back</Button>
     </Link>
    {load?   
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
   :messages.map((message,i)=>(< MessagesCard message={message} key={i}/>))
    }
      </div>
  )
}

export default GetMessages