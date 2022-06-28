import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentUser } from '../../JS/Actions/AuthUserActions'
import {Button, InputGroup} from "react-bootstrap"

function ChangePhoto() {
    const user = useSelector((state)=>state.authReducer.user)
  const dispatch = useDispatch()
    const [photo, setPhoto] = useState(null)

  
   const EditPhoto=async()=>{
    const data= new FormData()
    data.append('imageUser',photo)
    const config={
        headers:{
            authorization:localStorage.getItem('token')
        }
    }
    try {
         await axios.put('/api/User/updatePhotoUser',data,config)
         
        dispatch(getCurrentUser())
    } catch (error) {
        console.log(error)
        
    }
   }
  return (
    <div className='container'>
        <img src={user&&user.photo ? `Image/${user.photo}`: "https://bootdey.com/img/Content/avatar/avatar7.png"} alt=""/>
<br/>
    <input  type="file" onChange={(e)=>setPhoto(e.target.files[0])}/>
    {/* <button onClick={EditPhoto}>submit</button> */}
    <Button onClick={EditPhoto} variant="outline-dark">Submit</Button>
    </div>
  )
}

export default ChangePhoto