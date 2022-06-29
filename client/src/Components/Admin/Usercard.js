import React from 'react'
import { Button } from 'react-bootstrap'

function UserCard() {
  return (
<div className="a-box">
     <div className="img-container">
       <div className="img-inner">
         <div className="inner-skew">
           <img src="" alt="" />
         </div>
       </div>
     </div>
     <div className="text-container">
       <h3>name</h3>
       <div>
       <Button  variant="outline-danger">Delete User</Button>
       </div>
     </div>
   </div>
  )
}

export default UserCard