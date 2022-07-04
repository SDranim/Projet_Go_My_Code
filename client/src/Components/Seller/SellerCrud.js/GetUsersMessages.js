import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
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
  
    <div classNam='offerlist'>
        <Link to='/profileSeller'>
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
   :messages.map((message,i)=>(< UsersMessagesCard message={message} key={i}/>))
    }
      </div>
  )
}

export default GetUsersMessages