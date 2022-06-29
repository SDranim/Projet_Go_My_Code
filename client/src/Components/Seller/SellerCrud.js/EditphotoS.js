import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {Button} from "react-bootstrap"
import { getCurrentSeller } from '../../../JS/Actions/AuthSellerActions'

function ChangePhoto() {
    const user = useSelector((state)=>state.authReducer.user)
  const dispatch = useDispatch()
    const [photo, setPhoto] = useState(null)

  
   const EditPhoto=async()=>{
    const data= new FormData()
    data.append('imageSeller',photo)
    const config={
        headers:{
            authorization:localStorage.getItem('token')
        }
    }
    try {
         await axios.put('/api/Seller/updatePhotoSeller',data,config)
         
        dispatch(getCurrentSeller())
    } catch (error) {
        console.log(error)
        
    }
   }
  return (
    <div className='container'>
        <img src={user&&user.photo ? `Image/${user.photo}`: "https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png"} alt=""/>
<br/>
    <input  type="file" onChange={(e)=>setPhoto(e.target.files[0])}/>
    {/* <button onClick={EditPhoto}>submit</button> */}
    <Button onClick={EditPhoto} variant="outline-dark">Submit</Button>
    </div>
  )
}

export default ChangePhoto