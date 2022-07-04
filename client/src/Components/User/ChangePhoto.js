import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentUser } from '../../JS/Actions/AuthUserActions'
import {Button} from "react-bootstrap"
import { Link } from 'react-router-dom'

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
<div>
    <Link to='/profileUser'>
    <Button style={{backgroundColor:"#570A57"}} variant="outline-light">Back</Button>
    </Link>
    <div className='container'>
      
        <img src={user&&user.photo ? `Image/${user.photo}`: "https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png"} alt=""/>
<br/>
    <input  type="file" onChange={(e)=>setPhoto(e.target.files[0])}/>

    <Button onClick={EditPhoto} style={{backgroundColor:"#570A57"}} variant="outline-light">Submit</Button>

    </div>
    </div>
  )
}

export default ChangePhoto